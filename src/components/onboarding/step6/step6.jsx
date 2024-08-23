import React from 'react';
import { useNavigate } from 'react-router-dom';
import './step6.css';

const Step6 = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-5">
          <div className="well p-5">
            <img src="assets/app/images/logo/logo.png" alt="Logo" />
            <h1>Your account is being created</h1>
            <p>Return to increase your speed to process bids and rebates at an astonishing rate.</p>
            <form>
              <div className="form-group mb-4">
                <strong>Progress</strong>
                <div className="form-control form-control-lg p-0 overflow-hidden position-relative bg-secondary d-flex align-items-center">
                  <div className="py-4 bg-warning" style={{ width: '30%' }}></div>
                  <small className="position-absolute ms-2 text-light fw-bold">7% Setting up database</small>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-lg w-100 mb-3"
                onClick={() => navigate('/tutorial')}
              >
                Go to Tutorial
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-lg w-100"
                onClick={() => navigate('/dashboard')}
              >
                Go to Dashboard
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-7">
          <div
            className="w-100 h-100 d-none d-lg-flex d-md-flex rounded-5 overflow-hidden align-items-center justify-content-center text-light"
            style={{ backgroundImage: `url('assets/app/images/backgrounds/bg-1.png')` }}
          >
            <h3>Say goodbye to stacks of paper.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6;
