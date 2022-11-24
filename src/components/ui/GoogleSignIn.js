import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { FormattedMessage } from 'react-intl';
import { startGoogleSignIn } from '../../store/auth';

export const GoogleSignIn = () => {

    const { status } = useSelector( state => state.auth);
    const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

    const dispatch =  useDispatch();
    const navigate = useNavigate();

    const lastPath = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';
        navigate( lastPath, {
            replace: true,
        });
    }

    const onGoogleLogin = () => {
        dispatch( startGoogleSignIn() );
        lastPath();
    }

    return (

        <motion.button
            className='button_accent google'
            type="button"
            onClick={ onGoogleLogin }
            disabled={ isAuthenticating }
            whileTap={{
                scale: 0.95,
            }}
        >
            <svg className="colored" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M23.52 12.2719C23.52 11.421 23.4437 10.6028 23.3018 9.81738H12V14.4592H18.4582C18.18 15.9592 17.3346 17.2301 16.0636 18.081V21.092H19.9418C22.2109 19.0029 23.52 15.9265 23.52 12.2719Z" fill="#4285F4"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.001 24.0003C15.241 24.0003 17.9574 22.9257 19.9428 21.093L16.0646 18.0821C14.9901 18.8021 13.6156 19.2276 12.001 19.2276C8.87554 19.2276 6.23008 17.1166 5.28644 14.2803H1.27734V17.3894C3.25189 21.3112 7.31008 24.0003 12.001 24.0003Z" fill="#34A853"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.28547 14.2795C5.04546 13.5595 4.9091 12.7904 4.9091 11.9995C4.9091 11.2085 5.04546 10.4395 5.28547 9.71945V6.61035H1.27637C0.463637 8.23035 0 10.0631 0 11.9995C0 13.9358 0.463637 15.7686 1.27637 17.3886L5.28547 14.2795Z" fill="#FBBC05"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.001 4.77274C13.7628 4.77274 15.3446 5.37819 16.5883 6.56729L20.0301 3.12546C17.9519 1.18909 15.2356 0 12.001 0C7.31008 0 3.25189 2.6891 1.27734 6.61092L5.28644 9.72002C6.23008 6.88365 8.87554 4.77274 12.001 4.77274Z" fill="#EA4335"/>
            </svg>
            <span><FormattedMessage id='Auth.SignInGoogleMessage'/></span>
        </motion.button>

    )
}
