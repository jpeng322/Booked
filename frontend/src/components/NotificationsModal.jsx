import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EditIcon } from "../assets/Icons";
import "../CSS/AccountSettings.css";

export default function NotificationsModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(props);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit{" "}
        <span>
          <EditIcon />
        </span>
      </Button>

      <Modal className="notifications-modal " show={show} onHide={handleClose}>
        <Modal.Header className="d-flex justify-content-center border-0">
          <Modal.Title>Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center flex-column align-items-center gap-2">
          {props.type === "notificationType" ? (
            <form>
              <div className="d-flex gap-3">
                <label htmlFor="phone_number">Phone Number:</label>
                <input className="border-0 border-bottom" type="checkbox" />
              </div>
              <div className="d-flex gap-3">
                <label htmlFor="phone_number">Email Address:</label>
                <input className="border-0 border-bottom" type="checkbox" />
              </div>
            </form>
          ) : (
            <form>
              <div className="d-flex gap-3">
                <label htmlFor="phone_number">Phone Number:</label>
                <input className="border-0 border-bottom" type="text" />
              </div>
              <div className="d-flex gap-3">
                <label htmlFor="phone_number">Email Address:</label>
                <input className="border-0 border-bottom" type="text" />
              </div>
            </form>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between border-0">
          <Button onClick={handleClose}>Save Changes</Button>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
