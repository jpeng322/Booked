import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Image,
  Card,
  CardGroup,
  Modal,
  Button,
} from "react-bootstrap";
import { Outlet, Link, NavLink } from "react-router-dom";
import SignoutModal from "../components/SignoutModal";
import "../CSS/AccountSettings.css";
import DeleteAccountModal from "../components/DeleteAccountModal";
const AccountSettings = () => {
  const [showSignoutModal, setShowSignoutModal] = useState(false);

  return (
    <Container fluid className="account-settings-container">
      <div className="account-settings-header align-self-start">
        Account Settings
      </div>
      <div className="account-settings-panel d-flex ">
        <div className="account-settings-tabs-container">
          <div className="account-settings-top-row">
            <div className="account-settings-tabs">
              {" "}
              <NavLink to="/provider/settings/myprofile">Profile</NavLink>
            </div>
            <div className="account-settings-tabs">
              {" "}
              <NavLink to="/provider/settings/wallet">Wallet</NavLink>
            </div>

            <div className="account-settings-tabs">
              {" "}
              <NavLink to="/provider/settings/notifications">
                Notifications
              </NavLink>
            </div>
          </div>
          <div className="account-settings-bottom-row">
            <div className="account-settings-tabs">
              {" "}
              <SignoutModal
                show={showSignoutModal}
                onHide={() => {
                  setShowSignoutModal(false);
                }}
              />
            </div>
            <div className="account-settings-tabs ">
              {" "}
              <DeleteAccountModal
                show={showSignoutModal}
                onHide={() => {
                  setShowSignoutModal(false);
                }}
              />
            </div>
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
