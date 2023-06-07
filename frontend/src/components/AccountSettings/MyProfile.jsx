import React, { useState } from "react";
import EditProfileModal from "../EditProfileModal";
import { useLoaderData } from "react-router-dom";
const MyProfile = () => {
  const providerLoaderData = useLoaderData();
  const [showSignoutModal, setShowSignoutModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [providerInformation, setProviderInformation] =
    useState(providerLoaderData);
  return (
    <div className="myprofile-container">
      <EditProfileModal
        showConfirmation={showConfirmation}
        setShowConfirmation={setShowConfirmation}
        setProviderInformation={setProviderInformation}
        show={showSignoutModal}
        onHide={() => {
          setShowSignoutModal(false);
        }}
      />
      <div className="account-settings-tabs-content-header">My Profile</div>
      <div className="myprofile-card">
        <div className="myprofile-edit">Edit</div>
        <div className="myprofile-row d-flex">
          <div>
            <div>Business Name:</div>
            <div className="myprofile-row-info">Build my construct LLC</div>
          </div>
          {/* <div>
            <div>Hours of operation:</div>
            <div className="myprofile-row-info">9AM-8PM</div>
          </div> */}
        </div>
        <div className="myprofile-row  d-flex">
          <div>
            <div>Business Email:</div>
            <div className="myprofile-row-info">
              {providerInformation.provider_email}
            </div>
          </div>
          <div>
            <div>Business Phone Number: </div>
            <div className="myprofile-row-info">
              {providerInformation.provider_phone}
            </div>
          </div>
        </div>
        <div className="myprofile-row  d-flex">
          <div>
            <div>Personal First Name:</div>
            <div className="myprofile-row-info">
              {providerInformation.provider_fname}
            </div>
          </div>
          <div>
            <div>Personal Last Name:</div>
            <div className="myprofile-row-info">
              {providerInformation.provider_lname}
            </div>
          </div>
        </div>
        <div className="myprofile-row  d-flex ">
          <div>
            <div>Password:</div>
            <div className="myprofile-row-info">
              {providerInformation.provider_password}
            </div>
          </div>
          {/* <div>
            <div>Phone:</div>
            <div className="myprofile-row-info">123-456-7891</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
