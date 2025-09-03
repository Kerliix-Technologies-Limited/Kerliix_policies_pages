import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import PoliciesLanding from "../pages/PoliciesLanding";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import Refund from "../pages/Refund";
import Cookies from "../pages/Cookies";
import AUP from "../pages/AUP";
import Security from "../pages/Security";
import GDPR from "../pages/GDPR";
import DMCA from "../pages/DMCA";
import CommunityGuidelines from "../pages/CommunityGuidelines";
import Accessibility from "../pages/Accessibility";
import Disclaimer from "../pages/Disclaimer";
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<PoliciesLanding />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/aup" element={<AUP />} />
        <Route path="/security" element={<Security />} />
        <Route path="/gdpr" element={<GDPR />} />
        <Route path="/dmca" element={<DMCA />} />
        <Route path="/community" element={<CommunityGuidelines />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/disclaimer" element={<Disclaimer />} />

        {/* Show NotFound page for all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}


