import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function DeleteAccountModal() {
  const [deleteMessage, setDeleteMessage] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  async function deleteAccount() {
    try {
      const response = await axios({
        method: "delete",
        url: `http://localhost:${import.meta.env.VITE_PORT}/auth/delete`,
        data: {
          userId: 3,
        },
      });

      if (response) {
        console.log(response);
        setDeleteMessage("asdsa");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Button
        style={{
          width: "160px",
        }}
        variant="outline-danger"
        size="sm"
        // className="text-danger"
        onClick={handleShow}
      >
        Delete Account
      </Button>

      <Modal
        className="d-flex justify-content-center  pt-5 "
        show={show}
        onHide={handleClose}
      >
        <Modal.Header
          closeButton
          className="d-flex align-items-center  border-bottom-0"
        ></Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center text-center pe-5 ps-5">
          {/* {signedOut ? (
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h3>You have signed out!</h3>
              <p>Redirecting to home in {counter} seconds.</p>
            </div>
          ) : ( */}
          <h3>Would you like to delete your account?</h3>
          {/* )} */}
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center align-items-center border-top-0 gap-3">
          {" "}
          <Button
            variant="danger"
            className="d-flex justify-content-center align-items-center m-0 mb-4"
            onClick={deleteAccount}
          >
            Yes, delete my account.
          </Button>
          <Button
            className="d-flex justify-content-center align-items-center m-0 mb-4"
            variant="outline-primary"
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
