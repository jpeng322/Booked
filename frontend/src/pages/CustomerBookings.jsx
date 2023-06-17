import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import BookingsCard from "../components/BookingsCard";
import CustomerCarousel from "../components/CustomerCarousel";
import BookingsTabs from "../components/CustomerBookingComp/CustomerBookingTabs";
import { useLoaderData } from "react-router-dom";

//css
import "../CSS/CustomerBookings.css";
const CustomerBookings = () => {
  const customerBookings = useLoaderData();
  console.log(customerBookings);

  return (
    <Container
      fluid
      className="customerbookings-container pe-md-4 ps-md-4 pe-lg-5 ps-lg-5 m-0"
    >
      <Row className="m-0">
        <h1 className="mt-5 mb-4">Manage Bookings</h1>
        <BookingsTabs />
      </Row>
      <Row className="m-0">
        <CustomerCarousel title="Your Favorites" />
      </Row>
      <Row className="m-0">
        <CustomerCarousel title="Recommended" type="" />
      </Row>
    </Container>
  );
};

export default CustomerBookings;
