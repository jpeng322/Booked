import React, { useState } from "react";
import OrderInfo from "./OrderInfo";
import Pagination from "react-bootstrap/Pagination";

const TabComp = ({ orders }) => {
  const numberOfOrders = 3;
  const numberOfPages = Math.ceil(orders.length / numberOfOrders);

  const [pageNumber, setPageNumber] = useState(1);
  const currentOrders =
    pageNumber === 1
      ? orders.slice(0, pageNumber * numberOfOrders)
      : orders.slice(
          (pageNumber - 1) * numberOfOrders,
          pageNumber * numberOfOrders
        );

  let items = [];
  for (let number = 1; number <= numberOfPages; number++) {
    items.push(
      <Pagination.Item
        onClick={(e) => {
          // console.log(breeds)
          setPageNumber(parseInt(e.target.textContent));
        }}
        key={number}
        active={number === pageNumber}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="completed-containers">
      <div className="completed-headers ">
        <div>NAME</div>
        <div>SERVICE TYPE</div>
        <div>DESCRIPTION</div>
        <div>SERVICE DATE </div>
        <div>PRICE </div>
        <div>STATUS </div>
        <div></div>
      </div>
      {/* <div className="completed-information"> */}
      {currentOrders.map((booking) => (
        <OrderInfo
          key={booking.id}
          provider_name={booking.provider_name}
          service_type={booking.service_type}
          order_desc={booking.order_desc}
          date_order={booking.date_order}
          cost={booking.cost}
          status={booking.status}
          id={booking.booking_id}
        />
      ))}
      {numberOfPages > 1 && (
        <div className="pagination-container">
          <Pagination>{items}</Pagination>
        </div>
      )}
    </div>
  );
};

export default TabComp;
