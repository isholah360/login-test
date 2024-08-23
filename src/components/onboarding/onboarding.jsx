import React from 'react';
import { Outlet } from 'react-router-dom';
import './onboarding.css';

const Onboarding = () => {
  return (
    <div className="onboarding-wrapper">
      <Outlet />
    </div>
  );
};

export default Onboarding;
