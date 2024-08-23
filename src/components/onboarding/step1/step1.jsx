import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './step1.css';

const Step1 = () => {
  const navigate = useNavigate();

  const handleGetStarted = (event) => {
    event.preventDefault();
    navigate('/onboarding/step2');
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-5">
          <div className="well p-5">
            <img src="assets/app/images/logo/logo.png" alt="Logo" />
            <h1>Create your account</h1>
            <p>Increase your speed to process bids and rebates at an astonishing rate.</p>
            <form onSubmit={handleGetStarted}>
              <div className="form-group mb-3">
                <strong>First and Last Name</strong>
                <input type="text" className="form-control form-control-lg is-invalid" placeholder="John Doe" />
                <div className="invalid-feedback">
                  Please provide a valid name.
                </div>
              </div>
              <div className="form-group mb-4">
                <strong>Email</strong>
                <input type="text" className="form-control form-control-lg" placeholder="john@achme.com" />
              </div>
              <button type="submit" className="btn btn-secondary btn-lg w-100">Get Started</button>
            </form>
            <span className="mt-4">
              Already have an account? 
              <Link to="/login"><small className="fw-bold">Sign in</small></Link>
            </span>
            <button className="btn btn-light mt-4 btn-outline-secondary btn-lg">
              <i className="fa fa-bell me-2"></i>Buzz the sales team
            </button>
          </div>
        </div>
        <div className="col-lg-7">
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

export default Step1;
