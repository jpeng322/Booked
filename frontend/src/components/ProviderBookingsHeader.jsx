import React from "react";

const ProviderBookingsHeader = () => {
  return (
    <div className="provider-booking-header-container ">
      <div className="provider-booking-header">Name:</div>
      <div className="provider-booking-header only-large">Address:</div>
      <div className="provider-booking-header">Job Type:</div>
      <div className="provider-booking-header only-large">Description:</div>
      <div className="provider-booking-header only-large">Book Date:</div>
      <div className="provider-booking-header only-large">Due Date:</div>
      <div className="provider-booking-header ">Earning:</div>
      <div className="provider-booking-header">Status:</div>
      <div className="provider-booking-header"></div>
    </div>
  );
};

export default ProviderBookingsHeader;
