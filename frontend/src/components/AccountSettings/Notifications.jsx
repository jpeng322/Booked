import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import "../../CSS/AccountSettings.css";
import NotificationsModal from "../NotificationsModal";

const Notifications = () => {
  return (
    <div className="notifications-container">
      <div className="account-settings-tabs-content-header">Notifications</div>
      <div className="notification-card">
        <div className="d-flex justify-content-between  ">
          <div>
            Confirm Phone number and email address for notifications on account.
          </div>
          <div>
            <NotificationsModal />{" "}
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div>Phone number?</div>
          <div>Email Address?</div>
        </div>
      </div>
      <div className="notification-card">
        <div className="d-flex justify-content-between  ">
          <div>Type of notifications</div>
          <NotificationsModal type="notificationType" />
        </div>
        <div>
          <div className="d-flex justify-content-around">
            <div>123-456-7890</div>
            <div>Johndoe@gmail.com</div>
          </div>
          <div className="d-flex justify-content-around ">
            <div>Phone alert?</div>
            <div>Email alert?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
