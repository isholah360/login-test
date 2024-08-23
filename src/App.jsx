import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import "./App.css";
import Login from "./components/auth/login";
import ResetPassword from "./components/auth/ResetPassword";
import ResetPasswordForm from "./components/auth/ResetPasswordForm";
import ResetPasswordLink from "./components/auth/ResetPasswordLink";
import ResetPasswordComplete from "./components/auth/ResetPasswordComplete";
import Step1 from "./components/onboarding/Step1";
import Step2 from "./components/onboarding/Step2";
import Step3 from "./components/onboarding/Step3";

import Step4 from "./components/onboarding/Step4";

import Step5 from "./components/onboarding/Step5";
import Step6 from "./components/onboarding/Step6";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/request-password-reset" element={<ResetPassword />} />

        <Route path="/reset-password" element={<ResetPasswordForm />} />

        <Route path="/link" element={<ResetPasswordLink />} />

        <Route path="/reset-completed" element={<ResetPasswordComplete />} />
        
        <Route path="/personal-info" element={<Step1 />} />

        <Route path="/business-info" element={<Step2 />} />

        {/* <Route path="/select-price" element={<Step3 />} /> */}

        <Route path="/payment-method" element={<Step4 />} />

        <Route path="/agree-terms" element={<Step5 />} />

        <Route path="/account-progress" element={<Step6 />} />
        
        {/* <Route path="/" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
