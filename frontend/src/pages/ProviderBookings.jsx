import React, { useEffect, useState, useRef } from "react";
import { Container, Col, Row, Pagination } from "react-bootstrap";
import ProviderBookingInfo from "../components/ProviderBookingInfo";
import ProviderBookingsHeader from "../components/ProviderBookingsHeader";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
//styling
import "../CSS/ProviderBooking.css";
import "react-calendar/dist/Calendar.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

const ProviderBookings = () => {
  const bookingData = useLoaderData();

  const [bookings, setBookings] = useState(bookingData);
  console.log(bookingData);

  const [pendingBookings, setPendingBookings] = useState(
    bookings.filter((booking) => booking.status === "pending")
  );
  const [scheduledBookings, setScheduledBookings] = useState(
    bookings.filter((booking) => booking.status === "scheduled")
  );
  const [completedBookings, setCompletedBookings] = useState(
    bookings.filter((booking) => booking.status === "completed")
  );

  const [cancelledBookings, setCancelledBookings] = useState(
    bookings.filter((booking) => booking.status === "cancelled")
  );

  const [filteredBookings, setFilteredBookings] = useState();

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

  const numberOfPendingPages = Math.ceil(
    pendingBookings.length / numberOfBookings
  );

  console.log(numberOfPendingPages);
  const [pendingPageNumber, setPendingPageNumber] = useState(1);
  const currentPendingBookings =
    pendingPageNumber === 1
      ? pendingBookings.slice(0, pendingPageNumber * numberOfBookings)
      : pendingBookings.slice(
          (pendingPageNumber - 1) * numberOfBookings,
          pendingPageNumber * numberOfBookings
        );

  let pendingItems = [];
  console.log(pendingItems);
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
    scheduledPageNumber === 1
      ? scheduledBookings.slice(0, scheduledPageNumber * numberOfBookings)
      : scheduledBookings.slice(
          (scheduledPageNumber - 1) * numberOfBookings,
          scheduledPageNumber * numberOfBookings
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
    completedPageNumber === 1
      ? completedBookings.slice(0, completedPageNumber * numberOfBookings)
      : completedBookings.slice(
          (completedPageNumber - 1) * numberOfBookings,
          completedPageNumber * numberOfBookings
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

  const numberOfCancelledPages = Math.ceil(
    cancelledBookings.length / numberOfBookings
  );

  const [cancelledPageNumber, setCancelledPageNumber] = useState(1);
  const currentCancelledBookings =
    cancelledPageNumber === 1
      ? cancelledBookings.slice(0, cancelledPageNumber * numberOfBookings)
      : cancelledBookings.slice(
          (cancelledPageNumber - 1) * numberOfBookings,
          cancelledPageNumber * numberOfBookings
        );

  let cancelledItems = [];
  for (let number = 1; number <= numberOfCancelledPages; number++) {
    cancelledItems.push(
      <Pagination.Item
        onClick={(e) => {
          // console.log(breeds)
          setCancelledPageNumber(parseInt(e.target.textContent));
        }}
        key={number}
        active={number === cancelledPageNumber}
      >
        {number}
      </Pagination.Item>
    );
  }

  let today = new Date();

  const bookingMakers = bookings.map((booking) => ({
    title: booking.client_name,
    status: booking.status,
    start: new Date(booking.start_date),
    end: new Date(booking.end_date),
    color: "white",
    colorEvento:
      booking.status === "pending"
        ? "#F9EDB4"
        : booking.status === "completed"
        ? "#889263"
        : booking.status === "cancelled"
        ? "#FF6D60"
        : "#6d8fb0",
    // "#146C94",
  }));
  // console.log(newBookings);

  const numberOfPending = bookingData.filter(
    (booking) => booking.status === "pending"
  ).length;

  console.log(filteredBookings);
  return (
    <Container
      fluid
      className="provider-booking-container d-flex flex-column justify-content-center align-items-center border w-100 "
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
      <Tabs>
        <TabList>
          <Tab className="all-tab react-tabs__tab">All ({bookings.length})</Tab>
          <Tab className="pending-tab react-tabs__tab">
            Pending (
            {bookings.filter((booking) => booking.status === "pending").length})
          </Tab>
          <Tab className="upcoming-tab react-tabs__tab">
            Upcoming (
            {
              bookings.filter((booking) => booking.status === "scheduled")
                .length
            }
            )
          </Tab>
          <Tab className="completed-tab react-tabs__tab">
            Completed (
            {
              bookings.filter((booking) => booking.status === "completed")
                .length
            }
            )
          </Tab>
          <Tab className="cancelled-tab react-tabs__tab">
            Cancelled (
            {
              bookings.filter((booking) => booking.status === "cancelled")
                .length
            }
            )
          </Tab>
        </TabList>
        <TabPanel>
          <div className="provider-booking-rows w-100 text-center">
            <ProviderBookingsHeader />
            {currentBookings.map((booking) => (
              <ProviderBookingInfo
                bookings={bookings}
                booking={booking}
                setBookings={setBookings}
                key={booking.id}
                setPendingBookings={setPendingBookings}
                setScheduledBookings={setScheduledBookings}
                setCompletedBookings={setCompletedBookings}
                setCancelledBookings={setCancelledBookings}
                provider_address
              />
            ))}
          </div>
          {numberOfPages > 1 && (
            <div className="pagination-container">
              <Pagination>{items}</Pagination>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <div className="provider-booking-rows w-100 text-center">
            <ProviderBookingsHeader />
            {currentPendingBookings.map((booking) => (
              <ProviderBookingInfo
                booking={booking}
                bookings={bookings}
                setBookings={setBookings}
                key={booking.id}
                setFilteredBookings={setFilteredBookings}
                setPendingBookings={setPendingBookings}
                setScheduledBookings={setScheduledBookings}
                setCompletedBookings={setCompletedBookings}
                setCancelledBookings={setCancelledBookings}
              />
            ))}
          </div>
          {numberOfPendingPages > 1 && (
            <div className="pagination-container">
              <Pagination>{pendingItems}</Pagination>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <div className="provider-booking-rows w-100 text-center">
            <ProviderBookingsHeader />
            {currentScheduledBookings.map((booking) => (
              <ProviderBookingInfo
                bookings={bookings}
                booking={booking}
                setBookings={setBookings}
                key={booking.id}
                setFilteredBookings={setFilteredBookings}
                setPendingBookings={setPendingBookings}
                setScheduledBookings={setScheduledBookings}
                setCompletedBookings={setCompletedBookings}
                setCancelledBookings={setCancelledBookings}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="provider-booking-rows w-100 text-center">
            <ProviderBookingsHeader />
            {currentCompletedBookings.map((booking) => (
              <ProviderBookingInfo
                bookings={bookings}
                booking={booking}
                setBookings={setBookings}
                key={booking.id}
                setFilteredBookings={setFilteredBookings}
                setPendingBookings={setPendingBookings}
                setScheduledBookings={setScheduledBookings}
                setCompletedBookings={setCompletedBookings}
                setCancelledBookings={setCancelledBookings}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="provider-booking-rows w-100 text-center">
            <ProviderBookingsHeader />
            {currentCancelledBookings.map((booking) => (
              <ProviderBookingInfo
                bookings={bookings}
                booking={booking}
                setBookings={setBookings}
                key={booking.id}
                setFilteredBookings={setFilteredBookings}
                setPendingBookings={setPendingBookings}
                setScheduledBookings={setScheduledBookings}
                setCompletedBookings={setCompletedBookings}
                setCancelledBookings={setCancelledBookings}
              />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default ProviderBookings;
