import React from "react";

const MyProfile = () => {
  return (
    <div className="myprofile-container">
      <div className="account-settings-tabs-content-header">My Profile</div>
      <div className="myprofile-card">
        <div className="myprofile-edit">Edit</div>
        <div className="myprofile-row d-flex">
          <div>
            <div>Business Name:</div>
            <div className="myprofile-row-info">Build my construct LLC</div>
          </div>
          <div>
            <div>Hours of operation:</div>
            <div className="myprofile-row-info">9AM-8PM</div>
          </div>
        </div>
        <div className="myprofile-row  d-flex">
          <div>
            <div>Business Email:</div>
            <div className="myprofile-row-info">
              Buildmycontructllc@gmail.com
            </div>
          </div>
          <div>
            <div>Business Phone Number: </div>
            <div className="myprofile-row-info">123-456-7810</div>
          </div>
        </div>
        <div className="myprofile-row  d-flex">
          <div>
            <div>Personal First Name:</div>
            <div className="myprofile-row-info">Luis</div>
          </div>
          <div>
            <div>Personal Last Name:</div>
            <div className="myprofile-row-info">Hung</div>
          </div>
        </div>
        <div className="myprofile-row  d-flex ">
          <div>
            <div>Password:</div>
            <div className="myprofile-row-info">TKH123!</div>
          </div>
          <div>
            <div>Phone:</div>
            <div className="myprofile-row-info">123-456-7891</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
