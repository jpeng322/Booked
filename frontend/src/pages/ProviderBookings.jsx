import React, { useEffect, useState } from "react";
// import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import "../../node_modules/react-calendar/dist/Calendar.css"
// import './Calender.scss';
import { Container, Col, Row } from "react-bootstrap";

import ProviderBookingInfo from "../components/ProviderBookingInfo";
import "../CSS/ProviderBooking.css";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import enUS from "date-fns/locale/en-US";

import axios from "axios";
const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const ProviderBookings = () => {
  const [value, onChange] = useState(new Date());

  // const [bookings, setBookings] = useState([]);
  useEffect(() => {
    async function getBookings() {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:4000/booking/provider/1",
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

  const bookings = [
    {
      name: "Kashanna",
      id: "32432432123123xcvcxa",
      image: "Picture",
      order_type: "Basic Order",
      order_desc: "Install rims",
      order_date: "June 5 2023",
      order_due: "June 5 2023",
      total: "$500.00",
      status: "completed",
    },
    {
      name: "Hiwot",
      id: "324324321231231111",
      image: "Active",
      order_type: "Basic Order",
      order_desc: "Install rims",
      order_date: "June 1 2023",
      order_due: "June 1 2023",
      total: "$500.00",
      status: "active",
    },
    {
      name: "Jacky Peng",
      id: "32213432432123123",
      image: "Scheduled",
      order_type: "Basic Order",
      order_desc: "Paint rims",
      order_date: "June 12 2023",
      order_due: "June 15 2023",
      total: "$1500.00",
      status: "scheduled",
    },
    {
      name: "Mei Huang",
      id: "32432asdaswe",
      image: "Cancelled",
      order_type: "Basic Order",
      order_desc: "Install rims",
      order_date: "June 13 2023",
      order_due: "June 13 2023",
      total: "$500.00",
      status: "cancelled",
    },
    {
      name: "Mei Huang",
      id: "32432asdaswe",
      image: "Cancelled",
      order_type: "Basic Order",
      order_desc: "Install rims",
      order_date: "June 13 2023",
      order_due: "June 13 2023",
      total: "$500.00",
      status: "cancelled",
    },
    {
      name: "Mei Huang",
      id: "32432asdaswe",
      image: "Cancelled",
      order_type: "Basic Order",
      order_desc: "Install rims",
      order_date: "June 13 2023",
      order_due: "June 13 2023",
      total: "$500.00",
      status: "cancelled",
    },
    {
      name: "Mei Huang",
      id: "32432asdaswe",
      image: "Cancelled",
      order_type: "Basic Order",
      order_desc: "Install rims",
      order_date: "June 13 2023",
      order_due: "June 13 2023",
      total: "$500.00",
      status: "cancelled",
    },
    {
      name: "John Smith",
      id: "32432432",
      image: "Scheduled",
      order_type: "Basic Order",
      order_desc: "Install rims",
      order_date: "June 3 2023",
      order_due: "June 7 2023",
      total: "$500.00",
      status: "scheduled",
    },
    {
      name: "John Smithasdad",
      id: "32432432",
      image: "Scheduled",
      order_type: "Basic Order",
      order_desc: "Install rims",
      order_date: "June 10 2023",
      order_due: "June 10 2023",
      total: "$500.00",
      status: "pending",
    },
  ];

  const newBookings = bookings.map((booking) => ({
    title: booking.name,
    status: booking.status,
    start: new Date(booking.order_date),
    end: new Date(booking.order_due),
    color: "white",
    colorEvento:
      booking.status === "pending"
        ? "grey"
        : booking.status === "completed"
        ? "#2f6437"
        : booking.status === "active"
        ? "#53b946"
        : booking.status === "cancelled"
        ? "#FF6D60"
        : "#146C94",
  }));

  // const newBookings = bookings.map((booking) => ({
  //   title: booking.client_name,
  //   status: booking.status,
  //   start: new Date(booking.date_order),
  //   end: new Date(booking.date_due),
  //   color: "white",
  //   colorEvento:
  //     booking.status === "pending"
  //       ? "grey"
  //       : booking.status === "completed"
  //       ? "#2f6437"
  //       : booking.status === "active"
  //       ? "#53b946"
  //       : booking.status === "cancelled"
  //       ? "#FF6D60"
  //       : "#146C94",
  // }));
  console.log(newBookings);

  //   const newEvents1 = bookings.map((booking) => [
  //     ["title", booking.name],
  //     ["start", booking.order_date],
  //     ["end", booking.order_due],
  //   ]);
  //   console.log(newEvents1);
  //   const newEvents2 = newEvents1.map((bookingArr) => {
  //     console.log([bookingArr]);

  //     Object.fromEntries(new Map([bookingArr]));
  //   });
  //   console.log(newEvents2);

  //   let newObj = Object.fromEntries(bookings.map((bookings) => bookings));
  //   console.log(newObj);
  return (
    <Container
      fluid
      className="provider-booking-container d-flex flex-column justify-content-center align-items-center border w-100  gap-5 p-5"
    >
      <Calendar
        localizer={localizer}
        events={newBookings}
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
          <div className="provider-booking-header">Book Date:</div>
          <div className="provider-booking-header">Due Date:</div>
          <div className="provider-booking-header">Price:</div>
          <div className="provider-booking-header">Status:</div>
        </div>

        {bookings.map((booking) => (
          <ProviderBookingInfo
            key={booking.id}
            image={booking.image}
            order_type={booking.order_type}
            order_desc={booking.order_desc}
            order_date={booking.order_date}
            order_due={booking.order_due}
            total={booking.total}
            status={booking.status}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProviderBookings;
