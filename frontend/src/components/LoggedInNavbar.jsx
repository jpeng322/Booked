import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../CSS/LoggedInNavbar.css";
import { NavLink } from "react-router-dom";
const LoggedInNavbar = () => {
  return (
    // {
    //     localStorage.getItem("token") === true && localStorage.getItem("type") === "client" &&
    //     <>
    <div>
      {localStorage.getItem("token") ? (
        <Navbar className="loggedin-nav">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-flex gap-3">
                <NavLink to="/">Dashboard</NavLink>
                <NavLink
                  to={
                    localStorage.getItem("userType") === "client"
                      ? `/customer/bookings/${localStorage.getItem("userId")}` //   client bookings
                      : `/provider/bookings/${localStorage.getItem("userId")}` //   provider bookings
                  }
                >
                  Bookings
                </NavLink>
                <NavLink
                  to={
                    localStorage.getItem("userType") === "client"
                      ? "/client/settings" //   client settings
                      : `/provider/settings/${localStorage.getItem("userId")}`//   provider settings
                  }
                >
                  Settings
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        " "
      )}
    </div>
  );
};
export default LoggedInNavbar;
