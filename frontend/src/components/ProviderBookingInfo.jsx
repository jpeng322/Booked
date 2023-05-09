import React from "react";

import "../CSS/ProviderBooking.css";
const ProviderBookingInfo = ({
  order_type,
  order_desc,
  order_date,
  order_due,
  total,
  status,
}) => {
  return (
    <div className="provider-booking-container d-flex p-3">
      <div className="provider-booking flex-grow-1">{order_type}</div>
      <div className="provider-booking  flex-grow-1">{order_desc}</div>
      <div className="provider-booking  flex-grow-1">{order_date}</div>
      <div className="provider-booking flex-grow-1">{order_due}</div>
      <div className="provider-booking  flex-grow-1">{total}</div>
      <div className="provider-booking  flex-grow-1">{status}</div>
    </div>
  );
};

export default ProviderBookingInfo;
