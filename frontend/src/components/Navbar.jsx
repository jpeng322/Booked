import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

import BookedCheck from "../assets/navbar_logo.svg";
import BookedCheckImg from "../images/logo_navbar.png";
import LoggedInNavbar from "./LoggedInNavbar";
function NavComp() {
  return (
    <>
      <div className="col-md-12 d-flex justify-content-between align-items-center pe-5 ps-4  ">
        <img
          style={{
            paddingRight: "100px",
            width: "max(30%, 400px)",
          }}
          src={BookedCheckImg}
          alt=""
        />
        {/* <h1 className="text-center"
              style={{
                paddingRight: "100px",
                fontSize:"80px"
                }}>{BookedCheck}</h1> */}
        <div className="d-flex gap-4">
          <Button variant="warning" size="sm">
            Join Our Network
          </Button>{" "}
          <Button variant="warning" size="sm">
            Login/Sign Up
          </Button>{" "}
        </div>
      </div>

      <Navbar className="m-auto" bg="light" variant="light">
        <Container
          style={{
            paddingBottom: "0px",
            paddingInline: "50px",
          }}
        >
          <Nav
            className="justify-content-center"
            style={{
              marginLeft: "-15rem ",
            }}
          >
            <Nav.Link
              href="#home"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              Home Improvement
            </Nav.Link>
            <Nav.Link
              href="#features"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              Landscaping
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              Automotive
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              Personal Care
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              Pet Care
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              Designer & Artist
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              Events
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              Technology
            </Nav.Link>

            <Nav.Link
              className="text-left"
              href="#pricing"
              style={{
                marginLeft: "750px",
                marginRight: "0px",
              }}
            >
              About Us{" "}
            </Nav.Link>

            <Nav.Link href="#pricing">?</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <LoggedInNavbar />
    </>
  );
}

export default NavComp;
