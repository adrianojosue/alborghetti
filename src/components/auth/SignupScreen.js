import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from '../../hooks';
import { startCreatingAccountWithEmailAndPassword } from '../../store/auth';
import { GoogleSignIn } from '../ui/GoogleSignIn';

import { motion } from "framer-motion";

const formData = {
  email: '',
  password: '',
  displayName: '',
}

const emailRegexp = /^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}$)$/;
const passwordRegexp = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})$/;
const displayNameRegexp = /^(([a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]{2,40}([.]{0,1}))( [a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]{2,40}([.]{0,1}))+)$/;

const formValidations = {
  email: [ ( value ) => value.match(emailRegexp), <FormattedMessage id='Auth.SignUp.EmailRegexp'/> ],
  password: [ ( value ) => value.match(passwordRegexp), <FormattedMessage id='Auth.SignUp.PasswordRegexp'/> ],
  displayName: [ ( value ) => value.match(displayNameRegexp), <FormattedMessage id='Auth.SignUp.NameRegexp'/> ],
}

export const SignupScreen = () => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const [ formSubmitted, setFormSubmitted ] = useState(false);

  const { status } = useSelector( state => state.auth ); // state => state.auth
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const {

    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,

  } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault()
    setFormSubmitted(true)

    if ( !isFormValid ) return

    dispatch( startCreatingAccountWithEmailAndPassword( formState ) )

  }

  return (
        <>
          <motion.form
            className="auth_form"
            onSubmit={ onSubmit }
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 0}}
          >
            <h2><FormattedMessage id='Auth.SignUp.Title'/></h2>
            <input
              name="displayName"
              label="displayName"
              type="text"
              placeholder={
                intl.formatMessage({
                  id: 'Auth.SignUp.InputName'
                })
              }
              autoComplete="off"
              value={ displayName }
              onChange={ onInputChange }
              required
              autoFocus
            />

            {
              !!displayNameValid && formSubmitted
              ? <motion.label
                  className="error_message"
                  initial={{opacity: 0, scale: 0.5}}
                  animate={{opacity: 1, scale: 1}}
                  exit={{opacity: 0, scale: 0.5}}
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  { displayNameValid }
                </motion.label>
              : <></>
            }

            <input
              name="email"
              label="email"
              type="email"
              placeholder={
                intl.formatMessage({
                  id: 'App.InputEmailPlaceholder'
                })
              }
              autoComplete="off"
              value={ email }
              onChange={ onInputChange }
              required
            />

            {
              !!emailValid && formSubmitted
              ? <motion.label
                  className="error_message"
                  initial={{opacity: 0, scale: 0.5}}
                  animate={{opacity: 1, scale: 1}}
                  exit={{opacity: 0, scale: 0.5}}
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  { emailValid }
                </motion.label>
              : <></>
            }

            <input
              name="password"
              label="password"
              type="password"
              placeholder={
                intl.formatMessage({
                  id: 'App.InputPasswordPlaceholder'
                })
              }
              autoComplete="off"
              value={ password }
              onChange={ onInputChange }
              required
            />
            
            {
              !!passwordValid && formSubmitted
              ? <motion.label
                  className="error_message"
                  initial={{opacity: 0, scale: 0.5}}
                  animate={{opacity: 1, scale: 1}}
                  exit={{opacity: 0, scale: 0.5}}
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  { passwordValid }
                </motion.label>
              : <></>
            }

            <div className="auth_options">
              <motion.button
                className='button_accent'
                type="submit"
                disabled={ isCheckingAuthentication }
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 1,
                }}
              ><FormattedMessage id='Auth.ContinueButtonMessage'/></motion.button>
              <span><FormattedMessage id='Auth.OrOptionMessage'/></span>
              <GoogleSignIn />
            </div>
          </motion.form>

          <span><FormattedMessage id='Auth.SignUp.HaveAccountMessage'/> <Link to="/auth/login"><FormattedMessage id='Auth.SignUp.SignInInstead'/></Link></span>
        </>
  )
}