import React from "react";

const Wallet = () => {
  return (
    <div className="wallet-container">
      <div className="account-settings-tabs-content-header">Wallet</div>
      <div className="wallet-card">
        <div>
          <div className="d-flex justify-content-between ">
            <div>
              <div className="fw-semibold fs-4">Total Sales</div>
              <div className="fw-semibold fs-5">$1,700.00</div>
            </div>
            <div>
              <div>Last Payment</div>
              <div>$35.40</div>
              <div>Received: April 4, 2023</div>
            </div>
          </div>
        </div>
        <div>
          <div className="fw-semibold fs-4">Total Jobs Completed</div>
          <div className="fw-semibold fs-5">30</div>
        </div>
        <div className="d-flex gap-4 align-self-end">
          <button>Withdraw Money</button>
          <button>View All Jobs</button>
          <button>View All Transactions</button>
        </div>
      </div>
      <div className="wallet-card">
        <div>
          <div className="d-flex justify-content-between ">
            <div className="d-flex justify-content-between w-100">
              <div className="fw-semibold fs-4">Direct Deposit</div>
              <div className="">Edit</div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center w-100 ">
          <div className="flex-grow-1 text-center">
            <div className="fw-semibold fs-5 "> Bank Information</div>
            <div> J.P. Morgan Chase</div>
          </div>
          <div className="flex-grow-1 text-center">
            <div className="fw-semibold fs-5 ">Routing Number</div>
            <div>****-****-**</div>
          </div>
          <div className="flex-grow-1 text-center">
            <div className="fw-semibold fs-5">Account Number</div>
            <div>****-****-**</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
