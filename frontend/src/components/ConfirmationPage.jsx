import React, {useState} from "react";
import { Container, Col, Row, Image, Card, CardGroup, Modal } from "react-bootstrap";
import "../CSS/ConfirmationPage.css";
import { useLoaderData } from "react-router-dom";

import { BookedLogo } from "../assets/Icons";

import Placeholder from "../images/placeholder-image.png";

//components
import RequestFormModal from "../components/RequestFormModal";
import CancelModal from "./CancelModal";

const ConfirmationPage = () => {
  const bookingData = useLoaderData();
  const [modalShow, setModalShow] = useState(false);
  // console.log(bookingData);
  const bookingTime = bookingData.start_date.split(" ").slice(3).join(" ");
  const bookingDate = bookingData.start_date.split(" ").splice(0, 3).join(" ");
  return (
    <Container
      fluid
      className="confirmation-container  d-flex flex-column justify-content-center align-items-center "
    >
      <div className="confirmation-header">
        <span className="">
          <BookedLogo />
        </span>
        <div className="">Booking Confirmed </div>
      </div>
      <div className="confirmation-row-container ">
        <div className="confirmation-row d-flex flex-column  ">
          <div className="confirmation-subhead">DATE</div>
          <div>{bookingDate}</div>
        </div>
        <div className="confirmation-row d-flex flex-column ">
          <div className="confirmation-subhead">TIME</div>
          <div>{bookingTime}</div>
        </div>{" "}
        <div className="confirmation-row d-flex flex-column ">
          <div className="confirmation-subhead">SERVICE ADDRESS</div>
          <div>{bookingData.address}</div>
        </div>{" "}
        <div className="confirmation-row d-flex flex-column ">
          <div className="confirmation-subhead">SERVICE DETAIL</div>
          <div>{bookingData.order_desc}</div>
        </div>{" "}
        <div className="confirmation-row d-flex flex-column ">
          <div className="confirmation-subhead">ESTIMATED COST</div>
          <div>{bookingData.cost}</div>
        </div>{" "}
        <div className="confirmation-row d-flex flex-column ">
          <div className="confirmation-subhead">SERVICE PROVIDER</div>
          <div>{bookingData.provider_name}</div>
        </div>{" "}
        <div className="confirmation-row confirmation-row-image border d-flex  ">
          <div>
            <img src={Placeholder} alt="IMAGE" />
          </div>
          <div>
            <div>{bookingData.provider_name}</div>
            <div> Super </div>
          </div>
        </div>{" "}
        <div className="confirmation-row confirmation-button-row d-flex gap-5 ">
          <button onClick={()=>setModalShow(true)}>Cancel</button>
          <button  onClick={()=>setModalShow(true)}>Edit</button>
        </div>
      </div>
      <CancelModal
        // formData={data}
        booking_id = {bookingData.booking_id}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />
    </Container>
  );
};

export default ConfirmationPage;
