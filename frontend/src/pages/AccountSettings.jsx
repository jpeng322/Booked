import React from "react";
import { Container, Col, Row, Image, Card, CardGroup } from "react-bootstrap";
import { Outlet, Link, NavLink} from "react-router-dom";

import "../CSS/AccountSettings.css"
const AccountSettings = () => {
  return (
    <Container fluid className="account-settings-container">
      <div className="account-settings-header align-self-start">Account Settings</div>
      <div className="account-settings-panel d-flex ">
        <div className="account-settings-tabs-container">
          <div className="account-settings-tabs">
            {" "}
            <NavLink to="/settings/myprofile">My Profile</NavLink>
          </div>
          <div className="account-settings-tabs">
            {" "}
            <NavLink to="/settings/wallet">Wallet</NavLink>
          </div>

          <div className="account-settings-tabs">
            {" "}
            <NavLink to="/settings/notifications">Notifications</NavLink>
          </div>
          <div className="account-settings-tabs">
            {" "}
            <NavLink to="/settings/signout">Sign Out</NavLink>
          </div>
          <div className="account-settings-tabs">
            {" "}
            <NavLink to="/settings/delete_account">Delete Account</NavLink>
          </div>
        </div>
        <div className="account-settings-tab-content">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default AccountSettings;
