import { Routes, Route, Navigate } from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { RegisterScreen } from "../components/register/registerScreen";

export const AuthRoutes = () => {

  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="*" element={ <Navigate to='/auth/login' /> } />
    </Routes>
  )
}
