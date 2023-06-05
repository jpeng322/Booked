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

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 6, 0),
    end: new Date(2023, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2023, 6, 7),
    end: new Date(2023, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2023, 6, 20),
    end: new Date(2023, 6, 23),
  },
  {
    title: "Conferenceasdasdasd",
    start: "June 3, 2023",
    end: "June 3, 2023",
  },
];

const ProviderBookings = () => {
  const bookingData = useLoaderData();
  const [bookings, setBookings] = useState(bookingData);
  console.log("booking data", bookingData);
  console.log("boooookings", bookings);

  const [filteredBookings, setFilteredBookings] = useState();

  // const numberOfPending = useRef(bookingData.filter((booking) => booking.status === "pending").length)
  // useEffect(() => {
  //   count.numberOfPending = bookingData.filter((booking) => booking.status === "pending").length
  // }, [bookings])

  const numberOfBookings = 10;
  const numberOfPages = filteredBookings
    ? Math.ceil(filteredBookings.length / numberOfBookings)
    : Math.ceil(bookings.length / numberOfBookings);

  const [pageNumber, setPageNumber] = useState(1);
  const currentBookings = filteredBookings
    ? pageNumber === 1
      ? filteredBookings.slice(0, pageNumber * numberOfBookings)
      : filteredBookings.slice(
          (pageNumber - 1) * numberOfBookings,
          pageNumber * numberOfBookings
        )
    : pageNumber === 1
    ? bookings.slice(0, pageNumber * numberOfBookings)
    : bookings.slice(
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

  let today = new Date();

  let date =
    parseInt(today.getMonth() + 1) +
    "/" +
    today.getDate() +
    "/" +
    today.getFullYear();

  // const bookings = [
  //   {
  //     name: "Kashanna",
  //     id: "32432432123123xcvcxa",
  //     image: "Picture",
  //     order_type: "Basic Order",
  //     order_desc: "Install rims",
  //     order_date: "June 5 2023",
  //     order_due: "June 5 2023",
  //     total: "$500.00",
  //     status: "completed",
  //   },
  //   {
  //     name: "Hiwot",
  //     id: "324324321231231111",
  //     image: "Active",
  //     order_type: "Basic Order",
  //     order_desc: "Install rims",
  //     order_date: "June 1 2023",
  //     order_due: "June 1 2023",
  //     total: "$500.00",
  //     status: "active",
  //   },
  //   {
  //     name: "Jacky Peng",
  //     id: "32213432432123123",
  //     image: "Scheduled",
  //     order_type: "Basic Order",
  //     order_desc: "Paint rims",
  //     order_date: "June 12 2023",
  //     order_due: "June 15 2023",
  //     total: "$1500.00",
  //     status: "scheduled",
  //   },
  //   {
  //     name: "Mei Huang",
  //     id: "32432asdaswe",
  //     image: "Cancelled",
  //     order_type: "Basic Order",
  //     order_desc: "Install rims",
  //     order_date: "June 13 2023",
  //     order_due: "June 13 2023",
  //     total: "$500.00",
  //     status: "cancelled",
  //   },
  //   {
  //     name: "Mei Huang",
  //     id: "32432asdaswe",
  //     image: "Cancelled",
  //     order_type: "Basic Order",
  //     order_desc: "Install rims",
  //     order_date: "June 13 2023",
  //     order_due: "June 13 2023",
  //     total: "$500.00",
  //     status: "cancelled",
  //   },
  //   {
  //     name: "Mei Huang",
  //     id: "32432asdaswe",
  //     image: "Cancelled",
  //     order_type: "Basic Order",
  //     order_desc: "Install rims",
  //     order_date: "June 13 2023",
  //     order_due: "June 13 2023",
  //     total: "$500.00",
  //     status: "cancelled",
  //   },
  //   {
  //     name: "Mei Huang",
  //     id: "32432asdaswe",
  //     image: "Cancelled",
  //     order_type: "Basic Order",
  //     order_desc: "Install rims",
  //     order_date: "June 13 2023",
  //     order_due: "June 13 2023",
  //     total: "$500.00",
  //     status: "cancelled",
  //   },
  //   {
  //     name: "John Smith",
  //     id: "32432432",
  //     image: "Scheduled",
  //     order_type: "Basic Order",
  //     order_desc: "Install rims",
  //     order_date: "June 3 2023",
  //     order_due: "June 7 2023",
  //     total: "$500.00",
  //     status: "scheduled",
  //   },
  //   {
  //     name: "John Smithasdad",
  //     id: "32432432",
  //     image: "Scheduled",
  //     order_type: "Basic Order",
  //     order_desc: "Install rims",
  //     order_date: "June 10 2023",
  //     order_due: "June 10 2023",
  //     total: "$500.00",
  //     status: "pending",
  //   },
  // ];

  function sameOrAfterDateNow(date) {
    return moment().isAfter(date) || moment().isSame(date, "day");
  }

  // console.log(moment().isSame("May 18, 2023 11:00 AM", "day"))
  console.log(moment().isAfter("May 19, 2023 11:00 AM", "day"));
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
        ? // "grey"
          "#F3DD69"
        : booking.status === "completed"
        ? "#F6C58E"
        : // "#2f6437"
        // booking.status === "scheduled" && sameOrAfterDateNow(booking.start_date)
        // ? "#53b946"
        //     :
        booking.status === "cancelled"
        ? "#FF6D60"
        : "#AFC2D4",
    // "#146C94",
  }));
  // console.log(newBookings);

  function filterBooking(status) {
    // setBookings(bookingData.filter((booking) => booking.status === status));
    setFilteredBookings(
      bookings.filter((booking) => booking.status === status)
    );
  }

  const numberOfPending = bookingData.filter(
    (booking) => booking.status === "pending"
  ).length;

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
          onClick={() => filterBooking("pending")}
        >
          Pending (
          {bookings.filter((booking) => booking.status === "pending").length}
          )
        </div>
        <div
          className="upcoming filter"
          onClick={() => filterBooking("scheduled")}
        >
          {" "}
          Upcoming (
          {bookings.filter((booking) => booking.status === "scheduled").length})
        </div>
        <div
          className="completed filter"
          onClick={() => filterBooking("completed")}
        >
          Completed (
          {
            bookings.filter((booking) => booking.status === "completed")
              .length
          }
          )
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
          {currentBookings.map((booking) => (
            <ProviderBookingInfo
              bookings={bookings}
              setBookings={setBookings}
              id={booking.booking_id}
              key={booking.id}
              client_name={booking.client_name}
              address={booking.address}
              service_type={booking.service_type}
              order_desc={booking.order_desc}
              start_date={booking.start_date}
              end_date={booking.end_date}
              // order_due={booking.order_due}
              cost={booking.cost}
              status={booking.status}
            />
          ))}
        </div>

        {numberOfPages > 1 && (
          <div className="pagination-container">
            <Pagination>{items}</Pagination>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProviderBookings;
