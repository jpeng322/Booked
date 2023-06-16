import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import { CircleCheck, CircleCross } from "../assets/Icons";

import "../CSS/CancelModal.css";
const CancelModal = (props) => {
  const [cancelStatus, setCancelStatus] = useState(false);

  async function deleteBooking() {
    try {
      const response = await axios({
        method: "delete",
        url: `${import.meta.env.VITE_PORT}/booking/${props.booking_id}`,
      });

      if (response) {
        setCancelStatus(true);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="cancel-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column justify-content-center align-items-center ">
        {cancelStatus ? (
          <>
            <CircleCheck />
            <div>Your booking has been canceled.</div>
            <Link to="/provider">
              <button className="cancelled">Find other providers</button>
            </Link>
          </>
        ) : (
          <>
            <CircleCross />
            <div>Are you sure you want to cancel?</div>

            <button className="not-cancelled" onClick={() => deleteBooking()}>
              Yes
            </button>
          </>
        )}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default CancelModal;
