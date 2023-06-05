import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
export default function DeleteAccountModal() {
  const [signedOut, setSignedOut] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [counter]);

  function signout() {
    setSignedOut(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  return (
    <>
      <Button variant="default" onClick={handleShow}>
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
        <Modal.Body className="d-flex justify-content-center align-items-center pe-5 ps-5">
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
            className="d-flex justify-content-center align-items-center m-0 mb-4"
            onClick={() => {
              signout();
              setCounter(3);
            }}
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
