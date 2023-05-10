import React from "react";

import "../CSS/ProviderBooking.css";
const ProviderBookingInfo = ({
  service_type,
  order_desc,
  order_due,
  date_order,
  cost,
  status,
  client_name,
}) => {
  return (
    <div className="provider-booking-container d-flex p-3">
      <div className="provider-booking flex-grow-1">{client_name}</div>
      <div className="provider-booking flex-grow-1">{service_type}</div>
      <div className="provider-booking  flex-grow-1">{order_desc}</div>
      <div className="provider-booking  flex-grow-1">{date_order}</div>
      {/* <div className="provider-booking flex-grow-1">{order_due}</div> */}
      <div className="provider-booking  flex-grow-1">{cost}</div>
      <div className="provider-booking  flex-grow-1">{status}</div>
    </div>
  );
};

export default ProviderBookingInfo;
