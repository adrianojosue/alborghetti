import { AppRouter } from './routers/AppRouter';
import { ErrorMessage } from './components/ui/errorMessage';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export const App = () => {
  return (
    <>
      <PayPalScriptProvider
        options={{
            'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
        }}
      >
        <AppRouter />
        <ErrorMessage />
      </PayPalScriptProvider>
    </>
  )
}
