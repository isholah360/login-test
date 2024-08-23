import React from 'react';
import { useNavigate } from 'react-router-dom';
import './step3.css';

const Step3 = () => {
  const navigate = useNavigate();

  const handleStarterPlan = () => {
    // Logic for choosing the starter plan
  };

  const handleProPlan = () => {
    navigate('/onboarding/step4');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="well p-5">
            <img src="assets/app/images/logo/logo.png" alt="Logo" />
            <h1 className="mt-4">Pricing Model</h1>
            <div className="d-flex flex-row flex-wrap w-100">
              <p className="m-0">Select your plan, All Plans have a 7 day free trial.</p>
              <div className="d-flex ms-auto">
                <label className="custom-radio me-3">Annually
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
                <label className="custom-radio">Monthly
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="pricing-grid">
              <ul>
                <li></li>
                <li>
                  <div className="pricing-grid-header">
                    <h3>Starter</h3>
                    <strong>From <span>$349</span> / Monthly</strong>
                    <span>7 Day free trial</span>
                  </div>
                </li>
                <li>
                  <div className="pricing-grid-header">
                    <h3>Pro</h3>
                    <strong>From <span>$849</span> / Monthly</strong>
                    <span>7 Day free trial</span>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Teammate / Subscribers</strong>
                  <small>A teammate has their own login credentials. A subscriber is someone who can receive transaction notifications.</small>
                </li>
                <li>
                  <span>Includes 2 Teammates Includes 50 Subscribers</span>
                </li>
                <li>
                  <span>Includes 14 Teammates Includes 250 Subscribers</span>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Transactions</strong>
                  <small>Each transaction is a fully processed bundle of documents. A bundle can include up to 5 documents. Each document in the bundle can contain up to 50,000 words.</small>
                </li>
                <li>
                  <span>420 Transactions /Annually</span>
                </li>
                <li>
                  <span>1,740 Transactions /Annually</span>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-end w-100 mt-4">
              <button className="btn btn-secondary btn-lg me-3" onClick={handleStarterPlan}>
                Choose the starter plan
              </button>
              <button className="btn btn-secondary btn-lg" onClick={handleProPlan}>
                Choose the Pro plan
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div 
            className="w-100 h-100 d-none d-lg-flex d-md-flex rounded-5 overflow-hidden align-items-center justify-content-center text-light" 
            style={{ backgroundImage: `url('assets/app/images/backgrounds/bg-1.png')` }}>
            <h3>Say goodbye to stacks of paper.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
