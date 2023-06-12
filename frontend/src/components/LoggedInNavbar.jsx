import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../CSS/LoggedInNavbar.css";
import { NavLink } from "react-router-dom";
const LoggedInNavbar = () => {
  console.log(
    localStorage.getItem("token"),
    localStorage.getItem("userType") === "client"
  );
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
                      ? "/customer/bookings" //   client bookings
                      : "/provider/bookings" //   provider bookings
                  }
                >
                  Bookings
                </NavLink>
                <NavLink
                  to={
                    localStorage.getItem("userType") === "client"
                      ? "/settings" //   client settings
                      : "/settings" //   provider settings
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
