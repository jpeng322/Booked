import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  Form,
  useActionData,
  useLoaderData,
  useSubmit,
} from "react-router-dom";
import { CircleCheck } from "../assets/Icons";
import axios from "axios";
import "../CSS/EditProfileModal.css";

export const submitEditForm = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    // business_name: data.get("business_name"),
    business_email: data.get("business_email"),
    first_name: data.get("first_name"),
    last_name: data.get("last_name"),
    phone: data.get("phone"),
    password: data.get("password"),
  };

  // return redirect("/customer/confirmation");

  return submission;
};

export default function EditProfileModal({
  setShowConfirmation,
  showConfirmation,
  setProviderInformation,
}) {
  const providerLoaderData = useLoaderData();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = useActionData();
  console.log(data, providerLoaderData);
  let submit = useSubmit();
  async function sendFormData() {
    console.log("sending form data")
    try {
      const response = await axios({
        method: "put",
        url: `${import.meta.env.VITE_PORT}/provider/providers/${localStorage.getItem("userId")}`,
        data: {
          provider_email: data.business_email || providerLoaderData.provider_email,
          provider_password: data.password || providerLoaderData.provider_password,
          provider_fname: data.first_name || providerLoaderData.provider_fname,
          provider_lname: data.last_name || providerLoaderData.provider_lname,
          provider_phone: data.phone || providerLoaderData.provider_phone,
          // provider_business_name: data.business_name,
        },
      });

      if (response) {
        console.log(response);
        setShowConfirmation(true);
        setProviderInformation(response.data.updateProvider);
      } else {
        throw Error("No response");
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="edit-modal-container">
      <Button onClick={handleShow}>Edit</Button>

      <Modal
        className="edit-modal d-flex justify-content-center pt-5  "
        show={show}
        onHide={handleClose}
      >
        <Modal.Header
          // closeButton
          className="d-flex align-items-center  border-bottom-0"
        >
          <Modal.Title>
            {" "}
            {showConfirmation ? "" : "Edit Your Profile"}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex">
          {showConfirmation ? (
            <div className="d-flex flex-column align-items-center justify-content-center gap-4 mt-4">
              <h3>Your profile has been updated!</h3>
              <CircleCheck />
            </div>
          ) : (
            <Form
                onChange={(event) => {
                  submit(event.currentTarget);
                }}
                className="d-flex flex-column gap-3"
                method="put"
                action={`/provider/settings/${localStorage.getItem("userId")}/myprofile`}
            >
              {/* <div className="edit-input-div">
              <label htmlFor="">Business Name: </label>
              <input type="text" name="business_name" />
            </div> */}
              <div className="edit-input-div">
                <label htmlFor="">Business Email: </label>
                <input
                  type="text"
                  name="business_email"
                  defaultValue={providerLoaderData.provider_email}
                />
              </div>
              <div className="edit-input-div">
                <label htmlFor="">First Name: </label>
                <input
                  type="text"
                  name="first_name"
                  defaultValue={providerLoaderData.provider_fname}
                />
              </div>
              <div className="edit-input-div">
                <label htmlFor="">Last Name: </label>
                <input
                  type="text"
                  name="last_name"
                  defaultValue={providerLoaderData.provider_lname}
                />
              </div>
              <div className="edit-input-div">
                <label htmlFor="">Password: </label>
                <input
                  type="text"
                  name="password"
                  defaultValue="*********"
                />
              </div>
              <div className="edit-input-div">
                <label htmlFor="">Phone: </label>
                <input
                  type="text"
                  name="phone"
                  defaultValue={providerLoaderData.provider_phone}
                />
              </div>
            </Form>
          )}
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center align-items-center border-top-0 gap-3">
          {" "}
          {showConfirmation ? (
            <Button
              variant="primary"
              className="d-flex justify-content-center align-items-center m-0 mb-3"
              onClick={() => {
                setShow(false);
                // setShowConfirmation(false);
                setTimeout(() => {
                  setShowConfirmation(false);
                }, 500);
              }}
            >
              Done
            </Button>
          ) : (
            <>
              <Button
                variant="primary"
                className="d-flex justify-content-center align-items-center m-0 mb-3"
                onClick={sendFormData}
              >
                Update
              </Button>
              <Button
                variant="primary"
                className="d-flex justify-content-center align-items-center m-0 mb-3"
                onClick={() => setShow(false)}
              >
                Cancel
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
