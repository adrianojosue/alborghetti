import { AppRouter } from './routers/AppRouter';
import { ErrorMessage } from './components/ui/errorMessage';

export const App = () => {
  return (
    <>
      <AppRouter />
      <ErrorMessage />
    </>
  )
}
