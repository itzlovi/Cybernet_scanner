import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";

// Page imports
import LoginAuthentication from "pages/login-authentication";
import NetworkDashboard from "pages/network-dashboard";
import UserProfileSettings from "pages/user-profile-settings";
import VulnerabilityScanner from "pages/vulnerability-scanner";
import SecurityAlerts from "pages/security-alerts";
import VulnerabilityReports from "pages/vulnerability-reports";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<NetworkDashboard />} />
          <Route path="/login-authentication" element={<LoginAuthentication />} />
          <Route path="/network-dashboard" element={<NetworkDashboard />} />
          <Route path="/user-profile-settings" element={<UserProfileSettings />} />
          <Route path="/vulnerability-scanner" element={<VulnerabilityScanner />} />
          <Route path="/security-alerts" element={<SecurityAlerts />} />
          <Route path="/vulnerability-reports" element={<VulnerabilityReports />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;