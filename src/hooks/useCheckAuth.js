import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";

export const useCheckAuth = () => {

    const { status, emailVerified } = useSelector( state => state.auth );
    const dispatch =  useDispatch();

    useEffect(()=> {
        onAuthStateChanged( firebaseAuth, async (user) => {
        if ( !user ) return dispatch( logout() );

        const { uid, email, photoURL, displayName, emailVerified } = user;
        dispatch( login({ uid, email, photoURL, displayName, emailVerified }) );
        })
    }, [ dispatch ]) // []

    return {
        status,
        emailVerified
    }

}