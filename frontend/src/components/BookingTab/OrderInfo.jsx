import React from "react";

const OrderInfo = ({
  service_type,
  order_desc,
 date_order,
  cost,
  status,
  provider_name,
}) => {
  return (
    <div className="completed-information">
      <div>{provider_name}</div>
      <div>{service_type}</div>
      <div>{order_desc}</div>
      <div>{date_order}</div>
      <div>{cost}</div>
      {/* <button>BOOK AGAIN</button> */}
      <div>
        <button className="p-3">{status}</button>
      </div>
    </div>
  );
};

export default OrderInfo;
