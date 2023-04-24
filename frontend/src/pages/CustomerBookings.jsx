import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import BookingsCard from "../components/BookingsCard";
import FavoriteProviders from "../components/Favoritess";
import BookingsTabs from "../components/BookingsTabs";

//css
import "../CSS/CustomerBookings.css";
const CustomerBookings = () => {
  return (
    <Container fluid className="customerbookings-container pe-md-4 ps-md-4 pe-lg-5 ps-lg-5 m-0">
      <Row className="m-0">
        <h1>Manage Bookings</h1>

        <BookingsTabs />
        {/* <Row>Completed</Row> */}
      </Row>
      {/* <Row>
        <Row>Your Favorite</Row>
        <Row>All the cards</Row>
      </Row> */}
      <Row className="m-0">
      {/* <Row>Recommended</Row> */}
      {/* <Row>
          <Col> */}
      {/* <Row> */}
        {/* <div>Favorites</div> */}
        <FavoriteProviders />
      </Row>
      <Row className="m-0">
        {/* <div> Recommended</div> */}
        <FavoriteProviders />
      </Row>
      {/* <BookingsCard /> */}
      {/* </Col>
        </Row> */}
      {/* </Row> */}
    </Container>
  );
};

export default CustomerBookings;
