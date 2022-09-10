import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { DashboardRoutes } from '../routers/DashboardRoutes';
import { AuthRoutes } from '../routers/AuthRoutes';
import { ScrollTo } from "../helpers/ScrollTo";
import { CheckingAuth } from '../components/ui/checkingAuth';
import { useCheckAuth } from "../hooks";
import { EmailVerifiedScreen } from "../components/auth/emailVerifiedScreen";

export const AppRouter = () => {

  const { status, emailVerified } = useCheckAuth();

  if ( status === 'checking' ){
    return <CheckingAuth />
  }

  return (
    <BrowserRouter>
      <ScrollTo />
      <Routes>
        {
          ( status === 'authenticated' )
          ? <Route path="*" element={
              ( emailVerified === false )
              ? <EmailVerifiedScreen />
              : <DashboardRoutes />
          } />
          : <Route path="/auth/*" element={<AuthRoutes />} />
        }
        <Route path='*' element={ <Navigate to='/auth/login' /> } />
      </Routes>
    </BrowserRouter>
  )
}
