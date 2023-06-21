import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Col, Dropdown } from "react-bootstrap";

import BookedCheck from "../assets/navbar_logo.svg";
import BookedCheckImg from "../images/logo_navbar.png";
import LoggedInNavbar from "./LoggedInNavbar";
import { useNavigate, NavLink, Link } from "react-router-dom";
import AnonPfp from "../images/default-avatar.jpg";

import "../CSS/FilterNavbar.css";
import { getCustomerInfo, getProviderInfo } from "../api";
function NavComp() {
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    return navigate("/");
  }

  const [userInfo, setUserInfo] = useState("");
  const userType = localStorage.getItem("userType");
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchData() {
      if (userType === "client") {
        const userInfo = await getCustomerInfo(userId);
        setUserInfo(userInfo);
      } else if (userType === "provider") {
        const providerInfo = await getProviderInfo(userId);
        setUserInfo(providerInfo);
      } else {
        return;
      }
    }
    fetchData();
  }, [token]);

  console.log(userInfo);
  return (
    <>
      <div className="col-md-12 d-flex justify-content-between align-items-center pt-4 pe-5 ps-4  ">
        <img
          onClick={() => navigate("/")}
          style={{
            paddingRight: "100px",
            width: "max(30%, 400px)",
            cursor: "pointer",
          }}
          src={BookedCheckImg}
          alt=""
        />
        {/* <h1 className="text-center"
              style={{
                paddingRight: "100px",
                fontSize:"80px"
                }}>{BookedCheck}</h1> */}
        {localStorage.getItem("token") ? (
          <div className="d-flex dropdown-container">
            {userInfo.profile_pic ? (
              <img src={userInfo.profile_pic} alt="profile-pic" />
            ) : (
              <img src={AnonPfp} alt="" />
            )}
            <Dropdown className="navbar-dropdown">
              <Dropdown.Toggle id="dropdown-basic">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Dropdown.Toggle>

              <Dropdown.Menu className="p-0 overflow-hidden">
                <div className="link-container">
                  <NavLink
                    className="underline"
                    to={
                      userType === "client"
                        ? `/customer/bookings/${localStorage.getItem("userId")}`
                        : `/provider/bookings/${localStorage.getItem("userId")}`
                    }
                  >
                    Dashboard
                  </NavLink>

                  <NavLink
                    className=""
                    to={`/customer/account/${localStorage.getItem("userId")}`}
                  >
                    Settings
                  </NavLink>

                  <Link onClick={signOut}>Sign Out</Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : (
          <div className="d-flex gap-4 ">
            <Button
              className="home-button"
              onClick={() => navigate("provider/signup")}
              size="sm"
            >
              Join Our Network
            </Button>{" "}
            <Button
              className="home-button"
              onClick={() => navigate("customer/login")}
              size="sm"
            >
              Login/Sign Up
            </Button>{" "}
          </div>
        )}
      </div>

      <Navbar className="m-auto filter-nav p-0" variant="light" expand="lg">
        <Container
          fluid
          className="p-0"
          // style={{
          //   paddingBottom: "0px",
          //   paddingInline: "50px",
          // }}
        >
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav
            className="filter-nav-row justify-content-between d-flex"
            // style={{
            //   marginLeft: "-15rem ",
            // }}
          >
            <div className=" gap-3 d-flex flex-column flex-lg-row">
              <div className="d-flex filter-nav-top ">
                <NavLink
                  to="providers/home_improvement"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Home Improvement
                </NavLink>
                <NavLink
                  to="providers/landscaping"
                  // href="#features"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Landscaping
                </NavLink>
                <NavLink
                  to="providers/automotive"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Automotive
                </NavLink>
                <NavLink
                  to="providers/personal_care"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Personal Care
                </NavLink>
              </div>
              <div className="d-flex  filter-nav-bottom ">
                <NavLink
                  to="providers/pet_care"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Pet Care
                </NavLink>
                <NavLink
                  to="providers/designer_artist"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Designer & Artist
                </NavLink>
                <NavLink
                  to="providers/events"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Events
                </NavLink>
                <NavLink
                  to="providers/technology"
                  // style={{
                  //   marginLeft: "30px",
                  //   marginRight: "30px",
                  // }}
                >
                  Technology
                </NavLink>
              </div>
            </div>
            {/* <div className="d-flex">
              <Nav.Link
                className="text-left"
                href="#pricing"
                // style={{
                //   marginLeft: "750px",
                //   marginRight: "0px",
                // }}
              >
                About Us{" "}
              </Nav.Link>
              <Nav.Link href="#pricing">?</Nav.Link>
            </div> */}
          </Nav>
          {/* </Navbar.Collapse> */}
          <Col>
            <a href="/about">
              <p
                class="fs-5"
                style={{
                  marginLeft: "-9rem ",
                }}
              >
                About
              </p>
            </a>
          </Col>
        </Container>
      </Navbar>
      <LoggedInNavbar />
    </>
  );
}

export default NavComp;
