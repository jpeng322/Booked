import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import BookingsCard from "../components/BookingsCard";
import FavoriteProviders from "../components/Favoritess";

//css
import "../CSS/CustomerBookings.css"
const CustomerBookings = () => {
  return (
    <Container fluid className="customerbookings-container p-0 m-0">
      <Row>
        <Row>Manage Bookings</Row>
        <Row>Completed</Row>
      </Row>
      <Row>
        <Row>Your Favorite</Row>
        <Row>All the cards</Row>
      </Row>
      {/* <Row> */}
        <Row>Recommended</Row>
        {/* <Row>
          <Col> */}
            <FavoriteProviders />
            {/* <BookingsCard /> */}
          {/* </Col>
        </Row> */}
      {/* </Row> */}
    </Container>
  );
};

export default CustomerBookings;
