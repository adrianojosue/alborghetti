import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile, sendEmailVerification } from 'firebase/auth';
import { firebaseAuth } from './config';
import { FirebaseHandleErrors } from './firebaseHandleErrors';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {

        const result = await signInWithPopup( firebaseAuth, googleProvider );
        const { displayName, email, photoURL, uid, emailVerified } = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid, emailVerified,
        }

    } catch (error) {
        
        FirebaseHandleErrors(error)

        return {
            ok: false,
            errorMessage: error.message,

        }
    }
}

export const createAccountWithEmailAndPassword = async ({ email, password, displayName }) => {
    try {

        const resp = await createUserWithEmailAndPassword( firebaseAuth, email, password )
        const { uid, photoURL, emailVerified } = resp.user;

        await updateProfile( firebaseAuth.currentUser, { displayName })

        await sendEmailVerification( firebaseAuth.currentUser, {
            url: 'https://alborghettistore.web.app',
        });

        return {
            ok: true,
            uid, photoURL, displayName, email, emailVerified,
        }

    } catch (error) {

        FirebaseHandleErrors(error)

        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}

export const loginWithEmailAndPassword = async ({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword( firebaseAuth, email, password );
        const { uid, photoURL, displayName, emailVerified } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName, email, emailVerified,
        }
    } catch (error) {

        FirebaseHandleErrors(error)

        return {
            ok: false,
            errorMessage: error.message
        }
    }

}

export const emailVerification = async () => {
    try {
        
        const result = await sendEmailVerification( firebaseAuth.currentUser, {
            url: 'https://alborghettistore.web.app',
        });
        return {
            ok: true,
            result
        }

    } catch (error) {

        FirebaseHandleErrors(error)
        return {
            ok: false,
            errorMessage: error.message
        }

    }
}

export const forgotPassword = async ({ email }) => {
    
    try {
        const result = await sendPasswordResetEmail(firebaseAuth, email, {
            url: 'https://alborghettistore.web.app/auth/login',
        });

        return {
            ok: true,
            result
        }
    } catch (error) {

        FirebaseHandleErrors(error)

        return {
            ok: false,
            errorMessage: error.message
        }
    }

}

export const logoutFirebase = () => {
    return firebaseAuth.signOut();
}