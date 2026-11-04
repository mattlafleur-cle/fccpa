import React from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';

// Public Pages
import HomePage from './pages/HomePage.jsx';
import ForestCityAIPage from './pages/ForestCityAIPage.jsx';
import ForestCityCPAPage from './pages/ForestCityCPAPage.jsx';
import ForestCityConsultingPage from './pages/ForestCityConsultingPage.jsx';
import FinancialVisibilityPage from './pages/FinancialVisibilityPage.jsx';
import ForestCityCPAAboutPage from './pages/ForestCityCPAAboutPage.jsx';
import ForestCityCPANonprofitPage from './pages/ForestCityCPANonprofitPage.jsx';
import CPANonprofitPage from './pages/CPANonprofitPage.jsx';
import CPATaxPlanningPage from './pages/CPATaxPlanningPage.jsx';
import ReviewServicesPage from './pages/ReviewServicesPage.jsx';
import IndividualTaxPreparationPage from './pages/IndividualTaxPreparationPage.jsx';
import CPAFinancialHealthPage from './pages/CPAFinancialHealthPage.jsx';
import FinancialVisibilityCheckPage from './pages/FinancialVisibilityCheckPage.jsx';
import TaxStrategyDiagnosis from './pages/TaxStrategyDiagnosis.jsx';
import ReferralRewards from './pages/ReferralRewards.jsx';
import LandingPointWelcomePage from './pages/LandingPointWelcomePage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';


function App() {
  return (
    <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/ai" element={<ForestCityAIPage />} />
          <Route path="/cpa" element={<ForestCityCPAPage />} />
          <Route path="/consulting" element={<ForestCityConsultingPage />} />
          <Route path="/cpa/financial-visibility" element={<FinancialVisibilityPage />} />
          <Route path="/cpa/about" element={<ForestCityCPAAboutPage />} />
          <Route path="/cpa/nonprofit-religious-organizations" element={<ForestCityCPANonprofitPage />} />
          <Route path="/cpa/nonprofit" element={<CPANonprofitPage />} />
          <Route path="/cpa/tax-planning" element={<CPATaxPlanningPage />} />
          <Route path="/cpa/review-services" element={<ReviewServicesPage />} />
          <Route path="/individual-tax-preparation" element={<IndividualTaxPreparationPage />} />
          <Route path="/cpa/financial-health" element={<CPAFinancialHealthPage />} />
          <Route path="/cpa/financial-visibility-check" element={<FinancialVisibilityCheckPage />} />
          <Route path="/cpa/tax-strategy-diagnosis" element={<TaxStrategyDiagnosis />} />
          <Route path="/cpa/referral-rewards" element={<ReferralRewards />} />
          {/* Convenience redirect aliases */}
          <Route path="/tax-strategy-diagnosis" element={<Navigate to="/cpa/tax-strategy-diagnosis" replace />} />
          <Route path="/referral-rewards" element={<Navigate to="/cpa/referral-rewards" replace />} />
          <Route path="/landing-point-welcome" element={<LandingPointWelcomePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* 404 Catch-all */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
  );
}

export default App;