import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from '../../hooks';
import { startLoginWithEmailAndPassword, startForgotPassword } from '../../store/auth';
import { GoogleSignIn } from '../ui/GoogleSignIn';

const formData = {
  email: '',
  password: '',
}

export const LoginScreen = () => {

  const { status, errorMessage } = useSelector( state => state.auth);

  const dispatch =  useDispatch();
  const navigate = useNavigate();
  const intl = useIntl();

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

  const lastPath = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    navigate( lastPath, {
      replace: true,
    });
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch( startLoginWithEmailAndPassword({ email, password }) );
    lastPath();
  }

  const onForgotPassword = (event) => {
    event.preventDefault();
    dispatch( startForgotPassword({email}));
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
              <h2><FormattedMessage id='Auth.SignInMessage'/></h2>
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
              <input
                name="password"
                label="password"
                type="password"
                placeholder={
                  intl.formatMessage({
                    id: 'Auth.PasswordInputMessage'
                  })
                }
                autoComplete="off"
                value={ password }
                onChange={ onInputChange }
                required
              />

                {
                  ( errorMessage === 'not-error' )
                  ? <span>
                      <FormattedMessage id='Auth.ResetEmailDone'/>
                      <motion.svg
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className='icon_check'
                        initial={{ scale: 1.5 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 1.5 }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.0175 15.1992H3.1801C2.30904 15.1992 1.65403 14.9832 1.21507 14.5511C0.776118 14.119 0.556641 13.4708 0.556641 12.6066V2.79181C0.556641 1.92762 0.776118 1.27947 1.21507 0.847372C1.65403 0.415269 2.30904 0.199219 3.1801 0.199219H17.0175C17.9023 0.199219 18.5608 0.415269 18.9928 0.847372C19.425 1.27947 19.641 1.92762 19.641 2.79181V12.6066C19.641 13.4708 19.425 14.119 18.9928 14.5511C18.5608 14.9832 17.9023 15.1992 17.0175 15.1992ZM8.75107 11.5521C8.88482 11.6241 9.03057 11.6601 9.18831 11.6601C9.51754 11.6601 9.77474 11.5092 9.95991 11.2075L13.6328 5.40498C13.6876 5.30897 13.7408 5.20781 13.7922 5.10149C13.8437 4.99518 13.8694 4.89059 13.8694 4.78771C13.8694 4.56824 13.7888 4.39677 13.6276 4.27331C13.4664 4.14984 13.2864 4.08811 13.0875 4.08811C12.82 4.08811 12.6005 4.22871 12.4291 4.50993L9.14716 9.82885L7.66569 7.84326C7.55595 7.69237 7.44621 7.58949 7.33647 7.53462C7.22673 7.47974 7.1067 7.4523 6.97639 7.4523C6.76376 7.4523 6.58715 7.52776 6.44654 7.67866C6.30595 7.82955 6.23565 8.00787 6.23565 8.21363C6.23565 8.42625 6.30766 8.62516 6.45168 8.81035L8.36528 11.2075C8.48873 11.3652 8.61733 11.4801 8.75107 11.5521Z"
                          fill="none"
                        />
                      </motion.svg>
                    </span>
                  : <span className="action_link" onClick={ onForgotPassword }>
                      <FormattedMessage id='Auth.ResetEmailMessage'/>
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0962 9.5292C10.4789 9.5292 10.8369 9.3622 11.1703 9.02822L19.108 1.26012C18.8206 0.866656 18.2333 0.669922 17.3461 0.669922H2.69139C1.85833 0.669922 1.29997 0.844014 1.01628 1.1922L9.02138 9.02822C9.35524 9.3622 9.71351 9.5292 10.0962 9.5292ZM0.607455 14.6309L7.22383 8.30017L0.552018 1.8081C0.389735 2.03915 0.308594 2.46063 0.308594 3.07255V13.2673C0.308594 13.9246 0.408214 14.3792 0.607455 14.6309ZM2.71451 15.6699H17.3582C18.1829 15.6699 18.741 15.4961 19.0324 15.1486L12.438 8.82812L11.6867 9.55766C11.1902 10.0308 10.66 10.2674 10.0962 10.2674C9.5319 10.2674 9.00142 10.0308 8.50478 9.55766L7.75433 8.82812L1.09612 15.2125C1.37687 15.5174 1.91633 15.6699 2.71451 15.6699ZM19.4966 14.5435C19.6669 14.3131 19.752 13.8877 19.752 13.2673V3.07255C19.752 2.50372 19.6815 2.11528 19.5405 1.90723L12.9677 8.30017L19.4966 14.5435Z" fill="none"/>
                      </svg>
                    </span>
                }
              
              <div className="auth_options">
                <motion.button
                  className='button_accent'
                  type="submit"
                  disabled={ isAuthenticating }
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

            <span><FormattedMessage id='Auth.NewToMessage'/>  <Link to="/auth/signup"><FormattedMessage id='Auth.SignUp.Title'/></Link></span>
          </>
  )
}
