import { Container, Col, Row, Button, Modal } from "react-bootstrap";

import React, { useEffect, useState } from "react";

import "../CSS/RequestFormModal.css";

import { CircleCheck, CircleCross } from "../assets/Icons";
const RequestFormModal = (props) => {
  console.log(props);

  const [cancelForm, setCancelForm] = useState(false);
  const [confirmedCancel, setConfirmedCancel] = useState(null);

  // useEffect(() => {
  //   setCancelForm(false);
  //   setConfirmedCancel(null);
  // }, []);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
      // closeButton
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="w-100 d-flex justify-content-between align-items-between"
        >
          <div onClick={() => setCancelForm(true)}>Cancel</div>
          <div>Edit</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column gap-5">
        {cancelForm ? (
          <div className="confirmationForm h-100 d-flex flex-column justify-content-center align-items-center gap-4">
            <div>Are you sure you want to cancel?</div>
            <div className="d-flex gap-3 ">
              <button
                className=""
                onClick={() => {
                  setCancelForm(false);
                  setConfirmedCancel(true);
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setCancelForm(false);
                  setConfirmedCancel(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <>
            {" "}
            {/* {!confirmedCancel ? (
              <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                <div>
                  <CircleCheck />
                </div>
                <div>Your quote has been submitted.</div>
              </div>
            ) : (
              <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                <div>
                  <CircleCross />
                </div>
                <div>Your quote has been cancelled.</div>
              </div>
            )} */}
            <div className="d-flex flex-column justify-content-center align-items-center gap-4">
              <div>{!confirmedCancel ? <CircleCheck /> : <CircleCross />}</div>
              <div>
                {!confirmedCancel
                  ? "Your request has been submitted."
                  : "Your request has been cancelled"}{" "}
              </div>
            </div>
            <div className="d-flex flex-column align-items-center ">
              <div className="d-flex form-info gap">
                {" "}
                <div className="flex-1">To:</div>
                <div className="flex-1">
                  {props.formData && props.formData.zip_code}
                </div>{" "}
              </div>
              <div className="d-flex form-info">
                {" "}
                <div>Service Type:</div>
                <div>{props.formData && props.formData.service_type}</div>{" "}
              </div>
              <div className="d-flex form-info">
                <div>Service Date:</div>
                <div>{props.formData && props.formData.date}</div>
              </div>
              <div className="d-flex form-info">
                <div>Zip:</div>
                <div>{props.formData && props.formData.zip_code}</div>
              </div>
            </div>{" "}
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default RequestFormModal;
