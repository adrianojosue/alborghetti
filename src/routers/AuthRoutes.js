import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LandingPage } from "../components/LandingPage";

import { LoginScreen } from '../components/login/LoginScreen';
import { RegisterScreen } from "../components/register/registerScreen";

export const AuthRoutes = () => {

  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={ location } key={ location.pathname }>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="*" element={ <Navigate to='/' /> } />
      </Routes>
    </AnimatePresence>
  )
}
