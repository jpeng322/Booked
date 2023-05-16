import React, { useEffect, useState } from "react";
// import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import "../../node_modules/react-calendar/dist/Calendar.css"
// import './Calender.scss';
import { Container, Col, Row, Pagination } from "react-bootstrap";

import ProviderBookingInfo from "../components/ProviderBookingInfo";
import "../CSS/ProviderBooking.css";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import {
  Calendar,
  dateFnsLocalizer,
  momentLocalizer,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import enUS from "date-fns/locale/en-US";
import moment from "moment";

import axios from "axios";
const locales = {
  "en-US": enUS,
};

const localizer = momentLocalizer(moment);


const ProviderBookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    async function getBookings() {
      try {
        const response = await axios({
          method: "get",
          url: `http://localhost:${
            import.meta.env.VITE_PORT
          }/booking/provider/1`,
        });

        console.log(response);

        if (response) {
          setBookings(response.data.bookings);
        }
      } catch (e) {
        console.log(e);
      }
    }

    getBookings();
  }, []);

  const numberOfBookings = 10;
  const numberOfPages = Math.ceil(bookings.length / numberOfBookings);

  const [pageNumber, setPageNumber] = useState(1);
  const currentBookings =
    pageNumber === 1
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

  const dateNow = moment().format("L");

  function sameOrAfterDateNow(date) {
    return moment().isAfter(date) || moment().isSame(date, "day");
  }
  const bookingMakers = bookings.map((booking) => ({
    title: booking.client_name,
    status: booking.status,
    start: new Date(booking.start_date),
    end: new Date(booking.end_date),
    color: "white",
    colorEvento:
      booking.status === "pending"
        ? "grey"
        : booking.status === "completed"
        ? "#2f6437"
        : booking.status === "scheduled" &&
          sameOrAfterDateNow(booking.date_order)
        ? "#53b946"
        : booking.status === "cancelled"
        ? "#FF6D60"
        : "#146C94",
  }));

  console.log(typeof moment().format("L"));
  console.log(bookings);
  return (
    <Container
      fluid
      className="provider-booking-container d-flex flex-column justify-content-center align-items-center border w-100  gap-5 p-5"
    >
      <Calendar
        localizer={localizer}
        events={bookingMakers}
        startAccessor="start"
        endAccessor="end"
        
        style={{ height: 1000, margin: "50px" }}
        eventPropGetter={(newBookings) => {
          const backgroundColor = newBookings.colorEvento
            ? newBookings.colorEvento
            : "blue";
          const color = newBookings.color ? newBookings.color : "blue";
          return { style: { backgroundColor, color } };
        }}
      />
      {/* <Calendar onChange={onChange} value={value} /> */}
      <div className="w-100 text-center">
        <div className="provider-booking-header d-flex p-3">
          <div className="provider-booking-header">Name:</div>
          <div className="provider-booking-header">Service Type:</div>
          <div className="provider-booking-header">Description:</div>
          <div className="provider-booking-header">Start Date:</div>
          <div className="provider-booking-header">End Date:</div>
          <div className="provider-booking-header">Price:</div>
          <div className="provider-booking-header">Status:</div>
          <div className="provider-booking-header"></div>
        </div>

        {currentBookings.map((booking) => (
          <ProviderBookingInfo
            bookings={bookings}
            setBookings={setBookings}
            id={booking.booking_id}
            key={booking.id}
            client_name={booking.client_name}
            // image={booking.image}
            service_type={booking.service_type}
            order_desc={booking.order_desc}
            start_date={booking.start_date}
            end_date={booking.end_date}
            // order_due={booking.order_due}
            cost={booking.cost}
            status={booking.status}
          />
        ))}

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
