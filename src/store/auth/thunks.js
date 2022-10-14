import { loginWithEmailAndPassword, createAccountWithEmailAndPassword, signInWithGoogle, forgotPassword, logoutFirebase, emailVerification } from "../../firebase/providers";
import { onLogoutClearBagItems } from "../bag";
import { checkingCredentials, logout, login, doingAuthenticated, doneAuthenticated, doingNotAuthenticated, doneNotAuthenticated } from "./";

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() )
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await signInWithGoogle();
        
        if ( !result.ok) return dispatch( logout( result ) );

        dispatch( login( result ) )
    }
}

export const startCreatingAccountWithEmailAndPassword = ({ email, password, displayName }) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() )
        const result = await createAccountWithEmailAndPassword({ email, password, displayName })

        if ( !result.ok ) return dispatch( logout( result ) );

        dispatch( login( result ) )
    }
}

export const startLoginWithEmailAndPassword = ({ email, password }) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() )
        const result = await loginWithEmailAndPassword({ email, password })

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ) );
    }
}

export const startEmailVerification = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() )
        const result = await emailVerification()
        if ( !result.ok ) return dispatch( doingAuthenticated( result ) );
        dispatch( doneAuthenticated( result ) )
    }
}

export const startForgotPassword = ({ email }) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() )
        const result = await forgotPassword({email})
        if ( !result.ok ) return dispatch( doingNotAuthenticated( result ) );
        dispatch( doneNotAuthenticated( result ) );
    }
}

export const startLogoutFirebase = () => {
    return async ( dispatch ) => {
        await logoutFirebase();
        dispatch( onLogoutClearBagItems() );
        dispatch( logout() );
    }
}