import { startLoadingLang, setLang } from "./";

export const startGetLang = (lang) => {

    return async ( dispatch ) => {
        dispatch( startLoadingLang() );

        setTimeout(() => {
            dispatch( setLang(lang) );
            localStorage.setItem('langApp', lang)
        }, 800)
    }

}