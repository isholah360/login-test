import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './step2.css';

const Step2 = () => {
  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault();
    navigate('/onboarding/step3');
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-4">
          <div className="well p-5">
            <img src="assets/app/images/logo/logo.png" alt="Logo" />
            <h1>Hello, John</h1>
            <p>Increase your speed to process bids and rebates at an astonishing rate.</p>
            <form className="w-100" onSubmit={handleNext}>
              <div className="form-group mb-4">
                <strong>Legal Company Name</strong>
                <input type="text" className="form-control form-control-lg" placeholder="" />
              </div>
              <div className="form-group mb-4">
                <strong>Website</strong>
                <input type="text" className="form-control form-control-lg" placeholder="" />
              </div>
              <div className="form-group mb-4">
                <strong>Business Address</strong>
                <input type="text" className="form-control form-control-lg" placeholder="" />
              </div>
              <div className="form-group mb-4">
                <strong>Database / ERP</strong>
                <input type="text" className="form-control form-control-lg" placeholder="" />
              </div>
              <div className="form-group mb-4">
                <strong>Connect incoming Email</strong>
                <div className="row">
                  <div className="col-lg-6">
                    <button type="button" className="btn btn-outline-secondary w-100 btn-lg">
                      O365
                    </button>
                  </div>
                  <div className="col-lg-6">
                    <button type="button" className="btn btn-outline-secondary w-100 btn-lg">
                      Google
                    </button>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-secondary btn-lg w-100">Next</button>
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
        <div className="col-lg-8">
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

export default Step2;
