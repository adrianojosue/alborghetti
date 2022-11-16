import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';

import { WhatsNewScreen } from '../components/WhatsNewScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { ShoesScreen } from '../components/shoes/ShoesScreen';
import { MensScreen } from '../components/mens/MensScreen';
import { WomensScreen } from '../components/womens/WomensScreen';
import { NotFoundScreen } from '../components/NotFoundScreen';
import { AccountScreen } from "../components/account/accountScreen";
import { BagScreen } from "../components/bag/BagScreen";
import { ItemsData } from "../components/items/ItemsData";
import { OrderApproved } from '../components/orderApproved';
import { CookiesScreen } from "../components/cookies";
import { HelpScreen } from "../components/help";

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
              <Route path="/shoes/:gender/:id" element={<ShoesScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/shoes/mens" element={<MensScreen />} />
              <Route path="/shoes/womens" element={<WomensScreen />} />
              <Route path="/account" element={<AccountScreen />} />
              <Route path="/bag" element={<BagScreen />} />
              <Route path="/orderapproved" element={<OrderApproved />} />
              <Route path="/items" element={<ItemsData />} />
              <Route path="/cookies" element={<CookiesScreen />} />
              <Route path="/help" element={<HelpScreen />} />
              <Route path="/" element={<WhatsNewScreen />} />
              <Route path="*" element={ <NotFoundScreen /> } />
              <Route path="/auth/*" element={ <Navigate to='/' /> } />
          </Routes>
        </AnimatePresence>
        </main>

        <Footer />
    </>
  )
}
