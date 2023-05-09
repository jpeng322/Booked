import React from "react";

const OrderInfo = ({
  image,
  order_type,
  order_desc,
  order_date,
  order_due,
  total,
  status,
}) => {
  return (
    <div className="completed-information">
      <div>{image}</div>
      <div>{order_type}</div>
      <div>{order_desc}</div>
      <div>{order_date}</div>
      <div>{order_due}</div>
      <div>{total} </div>
      {/* <button>BOOK AGAIN</button> */}
      <div>
        <button className="p-3">{status}</button>
      </div>
    </div>
  );
};

export default OrderInfo;
