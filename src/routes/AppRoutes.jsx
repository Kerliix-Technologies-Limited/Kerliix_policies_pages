import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import PoliciesLanding from "../pages/PoliciesLanding";

// Existing
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

// New Policies
import EULA from "../pages/EULA";
import SLA from "../pages/SLA";
import Billing from "../pages/Billing";
import COPPA from "../pages/COPPA";
import ExportPolicy from "../pages/ExportPolicy";
import IncidentResponse from "../pages/IncidentResponse";
import Disclosure from "../pages/Disclosure";
import DataRetention from "../pages/DataRetention";
import AIEthics from "../pages/AIEthics";
import Moderation from "../pages/Moderation";
import Inclusion from "../pages/Inclusion";
import Transparency from "../pages/Transparency";
import ContentPolicy from "../pages/ContentPolicy";
import Partnerships from "../pages/Partnerships";
import OpenSource from "../pages/OpenSource";
import Advertising from "../pages/Advertising";

import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<PoliciesLanding />} />

        {/* Core Legal */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/eula" element={<EULA />} />
        <Route path="/sla" element={<SLA />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/coppa" element={<COPPA />} />
        <Route path="/export" element={<ExportPolicy />} />

        {/* Data & Security */}
        <Route path="/security" element={<Security />} />
        <Route path="/gdpr" element={<GDPR />} />
        <Route path="/data-retention" element={<DataRetention />} />
        <Route path="/disclosure" element={<Disclosure />} />
        <Route path="/incident-response" element={<IncidentResponse />} />
        <Route path="/ai-ethics" element={<AIEthics />} />

        {/* Community & Trust */}
        <Route path="/aup" element={<AUP />} />
        <Route path="/community" element={<CommunityGuidelines />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/dmca" element={<DMCA />} />
        <Route path="/moderation" element={<Moderation />} />
        <Route path="/inclusion" element={<Inclusion />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/content" element={<ContentPolicy />} />

        {/* Business & Partnerships */}
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/opensource" element={<OpenSource />} />
        <Route path="/advertising" element={<Advertising />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
      }
