import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../CSS/LoggedInNavbar.css";
import { NavLink, useLocation } from "react-router-dom";
const LoggedInNavbar = () => {
  let location = useLocation();
  console.log(location);
  return (
    // {
    //     localStorage.getItem("token") === true && localStorage.getItem("type") === "client" &&
    //     <>
    <div>
      {localStorage.getItem("token") && location.pathname !== "/" ? (
        <Navbar className="loggedin-nav">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-flex gap-3">
                <NavLink
                  to={
                    localStorage.getItem("userType") === "client"
                      ? `/customer/bookings/${localStorage.getItem("userId")}` //   client bookings
                      : `/provider/bookings/${localStorage.getItem("userId")}` //   provider bookings
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to={
                    localStorage.getItem("userType") === "client"
                      ? `/customer/account/${localStorage.getItem("userId")}` //   client settings
                      : `/provider/settings/${localStorage.getItem("userId")}` //   provider settings
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
