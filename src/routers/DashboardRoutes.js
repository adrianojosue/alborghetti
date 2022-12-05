import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';

import { WhatsNewScreen } from '../components/WhatsNewScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { ShoesScreen } from '../components/shoes/ShoesScreen';
import { MensScreen } from '../components/mens/MensScreen';
import { NotFoundScreen } from '../components/NotFoundScreen';
import { AccountScreen } from "../components/account/accountScreen";
import { BagScreen } from "../components/bag/BagScreen";
import { OrderApproved } from '../components/orderApproved';
import { CookiesScreen } from "../components/cookies";
import { HelpScreen } from "../components/help";
import { AboutUs } from "../components/AboutUs";

export const DashboardRoutes = () => {

  const location = useLocation();

  const lastPath = location.pathname + location.search;
  localStorage.setItem('lastPath', lastPath);

  return (
    <>
        <Navbar />

        <main>
        <AnimatePresence mode='wait'>
          <Routes location={ location } key={ location.pathname }>
              <Route path="*" element={ <NotFoundScreen /> } />
              <Route path="/" element={<WhatsNewScreen />} />
              <Route path="/cigars" element={<MensScreen />} />
              <Route path="/cigars/:id" element={<ShoesScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/account" element={<AccountScreen />} />
              <Route path="/bag" element={<BagScreen />} />
              <Route path="/orderapproved" element={<OrderApproved />} />
              <Route path="/cookies" element={<CookiesScreen />} />
              <Route path="/help" element={<HelpScreen />} />
              <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </AnimatePresence>
        </main>

        <Footer />
    </>
  )
}
