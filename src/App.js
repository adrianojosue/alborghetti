import { useEffect, useState } from 'react';
import { AppRouter } from './routers/AppRouter';
import { ErrorMessage } from './components/ui/errorMessage';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { useSelector, useDispatch } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { startGetLang } from "../src/store/lang";

import en from './lang/en-US.json';
import es from './lang/es-US.json';

export const App = () => {

  const { lang } = useSelector( state => state.lang );

  const [ messages, setMessages ] = useState(lang)

  const dispatch = useDispatch();

  const userLang = navigator.language.split('-')[0];

  const currentLang = localStorage.getItem('langApp');

  useEffect(() => {
    userLang !== 'es'
    ? !currentLang && dispatch(startGetLang('en'))
    : !currentLang && dispatch(startGetLang('es'))
  }, [userLang, currentLang, dispatch])

  useEffect(() => {
    lang !== 'es'
    ? setMessages(en)
    : setMessages(es)
  }, [lang])

  return (
    <>
      <IntlProvider locale='en' messages={messages}>
        <PayPalScriptProvider
          options={{
              'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
          }}
        >
          <AppRouter />
          <ErrorMessage />
        </PayPalScriptProvider>
      </IntlProvider>
    </>
  )
}
