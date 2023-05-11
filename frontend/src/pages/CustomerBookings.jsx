import React, {useEffect, useState} from "react";
import { Container, Col, Row } from "react-bootstrap";
import BookingsCard from "../components/BookingsCard";
import FavoriteProviders from "../components/FavoritesComp";
import BookingsTabs from "../components/BookingTab/BookingsTabs";


//css
import "../CSS/CustomerBookings.css";
const CustomerBookings = () => {




  return (
    <Container
      fluid
      className="customerbookings-container pe-md-4 ps-md-4 pe-lg-5 ps-lg-5 m-0"
    >
      <Row className="m-0">
        <h1>Manage Bookings</h1>
        <BookingsTabs />
      </Row>
      <Row className="m-0">
        <FavoriteProviders />
      </Row>
      <Row className="m-0">
        <FavoriteProviders />
      </Row>
    </Container>
  );
};

export default CustomerBookings;
