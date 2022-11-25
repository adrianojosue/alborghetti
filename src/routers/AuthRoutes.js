import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LandingPage } from "../components/LandingPage";

import { LoginScreen } from '../components/auth/LoginScreen';
import { SignupScreen } from "../components/auth/SignupScreen";
import { Auth } from "../components/auth/Auth";

export const AuthRoutes = () => {

  const location = useLocation();
  const locationArr = location.pathname?.split("/") ?? [];

  return (
    <AnimatePresence mode='wait'>
      <Routes location={ location } key={ locationArr[1] }>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/auth/" element={<Auth />} key={ locationArr[2] } >
          <Route path="login" element={<LoginScreen />} />
          <Route path="signup" element={<SignupScreen />} />
        </Route>

        <Route path="*" element={ <Navigate to='/' /> } />
      </Routes>
    </AnimatePresence>
  )
}
