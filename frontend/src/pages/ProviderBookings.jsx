import React, { useEffect, useState, useRef } from "react";
import { Container, Col, Row, Pagination } from "react-bootstrap";
import ProviderBookingInfo from "../components/ProviderBookingInfo";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
//styling
import "../CSS/ProviderBooking.css";
import "react-calendar/dist/Calendar.css";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

const ProviderBookings = () => {
  const bookingData = useLoaderData();

  const [bookings, setBookings] = useState(bookingData);

  const [pendingBookings, setPendingBookings] = useState(
    bookings.filter((booking) => booking.status === "pending")
  );
  const [scheduledBookings, setScheduledBookings] = useState(
    bookings.filter((booking) => booking.status === "scheduled")
  );
  const [completedBookings, setCompletedBookings] = useState(
    bookings.filter((booking) => booking.status === "completed")
  );

  const [paginationBookings, setPaginationBookings] = useState(bookings);

  const [bookingTab, setBookingTab] = useState("all");

  const [filteredBookings, setFilteredBookings] = useState();
  console.log(paginationBookings, "PAGINATION BOOKINGS");

  const numberOfBookings = 10;
  const numberOfPages = Math.ceil(paginationBookings.length / numberOfBookings);

  const [pageNumber, setPageNumber] = useState(1);
  const currentBookings =
    pageNumber === 1
      ? paginationBookings.slice(0, pageNumber * numberOfBookings)
      : paginationBookings.slice(
          (pageNumber - 1) * numberOfBookings,
          pageNumber * numberOfBookings
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

  const numberOfPendingPages = Math.ceil(
    pendingBookings.length / numberOfBookings
  );

  const [pendingPageNumber, setPendingPageNumber] = useState(1);
  const currentPendingBookings =
    pageNumber === 1
      ? pendingBookings.slice(0, pageNumber * numberOfBookings)
      : pendingBookings.slice(
          (pageNumber - 1) * numberOfBookings,
          pageNumber * numberOfBookings
        );

  let pendingItems = [];
  for (let number = 1; number <= numberOfPendingPages; number++) {
    pendingItems.push(
      <Pagination.Item
        onClick={(e) => {
          // console.log(breeds)
          setPendingPageNumber(parseInt(e.target.textContent));
        }}
        key={number}
        active={number === pendingPageNumber}
      >
        {number}
      </Pagination.Item>
    );
  }

  const numberOfScheduledPages = Math.ceil(
    scheduledBookings.length / numberOfBookings
  );

  const [scheduledPageNumber, setScheduledPageNumber] = useState(1);
  const currentScheduledBookings =
    pageNumber === 1
      ? scheduledBookings.slice(0, pageNumber * numberOfBookings)
      : scheduledBookings.slice(
          (pageNumber - 1) * numberOfBookings,
          pageNumber * numberOfBookings
        );

  let scheduledItems = [];
  for (let number = 1; number <= numberOfScheduledPages; number++) {
    scheduledItems.push(
      <Pagination.Item
        onClick={(e) => {
          // console.log(breeds)
          setScheduledPageNumber(parseInt(e.target.textContent));
        }}
        key={number}
        active={number === scheduledPageNumber}
      >
        {number}
      </Pagination.Item>
    );
  }

  const numberOfCompletedPages = Math.ceil(
    completedBookings.length / numberOfBookings
  );

  const [completedPageNumber, setCompletedPageNumber] = useState(1);
  const currentCompletedBookings =
    pageNumber === 1
      ? completedBookings.slice(0, pageNumber * numberOfBookings)
      : completedBookings.slice(
          (pageNumber - 1) * numberOfBookings,
          pageNumber * numberOfBookings
        );

  let completedItems = [];
  for (let number = 1; number <= numberOfCompletedPages; number++) {
    completedItems.push(
      <Pagination.Item
        onClick={(e) => {
          // console.log(breeds)
          setCompletedPageNumber(parseInt(e.target.textContent));
        }}
        key={number}
        active={number === completedPageNumber}
      >
        {number}
      </Pagination.Item>
    );
  }

  let today = new Date();

  let date =
    parseInt(today.getMonth() + 1) +
    "/" +
    today.getDate() +
    "/" +
    today.getFullYear();

  function sameOrAfterDateNow(date) {
    return moment().isAfter(date) || moment().isSame(date, "day");
  }

  function isDayOf(date) {
    return moment().isSame(date, "day");
  }
  const bookingMakers = bookings.map((booking) => ({
    title: booking.client_name,
    status: booking.status,
    start: new Date(booking.start_date),
    end: new Date(booking.end_date),
    color: "white",
    colorEvento:
      booking.status === "pending"
        ? 
          "#F3DD69"
        : booking.status === "completed"
        ? "#F6C58E"
        : 
        booking.status === "cancelled"
        ? "#FF6D60"
        : "#AFC2D4",
    // "#146C94",
  }));
  // console.log(newBookings);

  function filterBooking(status) {
    console.log("FILTERED");
    // setBookings(bookingData.filter((booking) => booking.status === status));
    setFilteredBookings(
      bookings.filter((booking) => booking.status === status)
    );
  }

  const numberOfPending = bookingData.filter(
    (booking) => booking.status === "pending"
  ).length;

  console.log(filteredBookings);
  return (
    <Container
      fluid
      className="provider-booking-container d-flex flex-column justify-content-center align-items-center border w-100  gap-5"
    >
      <Calendar
        localizer={localizer}
        events={bookingMakers}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 1000, margin: "50px" }}
        eventPropGetter={(bookingMakers) => {
          const backgroundColor = bookingMakers.colorEvento
            ? bookingMakers.colorEvento
            : "blue";
          const color = bookingMakers.color ? bookingMakers.color : "blue";
          return { style: { backgroundColor, color } };
        }}
      />
      <div className="provider-booking-filter">
        <div
          className="pending filter"
          // onClick={() => filterBooking("pending")}
          onClick={() => {
            setBookingTab("pending");
            setPaginationBookings(pendingBookings);
          }}
        >
          Pending (
          {bookings.filter((booking) => booking.status === "pending").length})
        </div>
        <div
          className="upcoming filter"
          // onClick={() => filterBooking("scheduled")}
          onClick={() => setBookingTab("scheduled")}
        >
          {" "}
          Upcoming (
          {bookings.filter((booking) => booking.status === "scheduled").length})
        </div>
        <div
          className="completed filter"
          // onClick={() => filterBooking("completed")}
          onClick={() => setBookingTab("completed")}
        >
          Completed (
          {bookings.filter((booking) => booking.status === "completed").length})
        </div>
      </div>
      {/* <Calendar onChange={onChange} value={value} /> */}
      <div className="provider-booking-rows w-100 text-center">
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
        <div className="booking-info-container">
          {bookingTab === "all" &&
            currentBookings.map((booking) => (
              <ProviderBookingInfo
                bookings={bookings}
                setBookings={setBookings}
                id={booking.booking_id}
                key={booking.id}
                client_name={booking.client_name}
                address={booking.address}
                address_id={booking.address_id}
                service_type={booking.service_type}
                order_desc={booking.order_desc}
                start_date={booking.start_date}
                end_date={booking.end_date}
                // order_due={booking.order_due}
                cost={booking.cost}
                status={booking.status}
                setPendingBookings={setPendingBookings}
                setScheduledBookings={setScheduledBookings}
                setCompletedBookings={setCompletedBookings}
              />
            ))}

          {bookingTab === "pending" &&
            currentPendingBookings.map((booking) => (
              <ProviderBookingInfo
                bookings={bookings}
                setBookings={setBookings}
                id={booking.booking_id}
                key={booking.id}
                client_name={booking.client_name}
                address={booking.address}
                address_id={booking.address_id}
                service_type={booking.service_type}
                order_desc={booking.order_desc}
                start_date={booking.start_date}
                end_date={booking.end_date}
                // order_due={booking.order_due}
                cost={booking.cost}
                status={booking.status}
                filterBooking={filterBooking}
                setFilteredBookings={setFilteredBookings}
                setPendingBookings={setPendingBookings}
                setScheduledBookings={setScheduledBookings}
                setCompletedBookings={setCompletedBookings}
              />
            ))}

          {bookingTab === "scheduled" &&
            currentScheduledBookings.map((booking) => (
              <ProviderBookingInfo
                bookings={bookings}
                setBookings={setBookings}
                id={booking.booking_id}
                key={booking.id}
                client_name={booking.client_name}
                address={booking.address}
                address_id={booking.address_id}
                service_type={booking.service_type}
                order_desc={booking.order_desc}
                start_date={booking.start_date}
                end_date={booking.end_date}
                // order_due={booking.order_due}
                cost={booking.cost}
                status={booking.status}
                filterBooking={filterBooking}
                setFilteredBookings={setFilteredBookings}
                setPendingBookings={setPendingBookings}
                setScheduledBookings={setScheduledBookings}
                setCompletedBookings={setCompletedBookings}
              />
            ))}

          {bookingTab === "completed" &&
            currentCompletedBookings.map((booking) => (
              <ProviderBookingInfo
                bookings={bookings}
                setBookings={setBookings}
                id={booking.booking_id}
                key={booking.id}
                client_name={booking.client_name}
                address={booking.address}
                address_id={booking.address_id}
                service_type={booking.service_type}
                order_desc={booking.order_desc}
                start_date={booking.start_date}
                end_date={booking.end_date}
                // order_due={booking.order_due}
                cost={booking.cost}
                status={booking.status}
                filterBooking={filterBooking}
                setFilteredBookings={setFilteredBookings}
                setPendingBookings={setPendingBookings}
                setScheduledBookings={setScheduledBookings}
                setCompletedBookings={setCompletedBookings}
              />
            ))}

          {numberOfPages > 1 && (
            <div className="pagination-container">
              <Pagination>{items}</Pagination>
            </div>
          )}

          {/* {numberOfPendingPages > 1 && (
            <div className="pagination-container">
              <Pagination>{pendingItems}</Pagination>
            </div>
          )} */}
        </div>
      </div>
    </Container>
  );
};

export default ProviderBookings;
