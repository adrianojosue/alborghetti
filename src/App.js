import { useEffect, useState } from 'react';
import { AppRouter } from './routers/AppRouter';
import { ErrorMessage } from './components/ui/errorMessage';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';

import en from './lang/en-US.json';
import es from './lang/es-US.json';

export const App = () => {

  const { lang } = useSelector( state => state.lang );

  const [ messages, setMessages ] = useState(lang)

  const userLang = navigator.language;
  console.log(userLang)

  useEffect(() => {
    userLang !== 'es'
    ? lang !== 'es' ? setMessages(en) : setMessages(es)
    : setMessages(es)
  }, [lang, userLang])

  return (
    <>
      <IntlProvider locale='en-US' messages={messages}>
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
