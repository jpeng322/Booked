import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { CircleCheck, CircleCross } from "../assets/Icons";

import "../CSS/CancelModal.css";
const CancelModal = (props) => {
  const [cancelStatus, setCancelStatus] = useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column justify-content-center align-items-center ">
        {cancelStatus ? (
          <>
            <CircleCheck />
            <div>Your booking has been canceled.</div>
            <button className="cancelled">Find other providers</button>
          </>
        ) : (
          <>
            <CircleCross />
            <div>Are you sure you want to cancel?</div>
            <button className="not-cancelled" onClick={() => setCancelStatus(true)}>Yes</button>
          </>
        )}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default CancelModal;
