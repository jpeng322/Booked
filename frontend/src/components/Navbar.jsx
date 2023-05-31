import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";


function NavComp() {
        return (
          <>
            <div className="col-md-12 text-end">
              <h1 className="text-center"
              style={{
                paddingRight: "100px",
                fontSize:"80px"
              }}>Logo</h1>
              <Button variant="warning" size="sm" >Join Our Network</Button>{' '}
              <Button variant="warning" size="sm">Login/Sign Up</Button>{' '}
            <div className="d-lg-flex">
            </div>
            </div>
            <br />
            <Navbar className="m-auto" bg="light" variant="light">
              <Container
              style={{
                paddingBottom: "0px",
                paddingInline: "50px"
            }}
              >
                <Nav className="justify-content-center"
                style={{
                  marginLeft: "-15rem ",
                  
                }}>
                  <Nav.Link href="#home"
                  style={{
                    marginLeft: "30px",
                     marginRight: "30px"
                  }}>
                    Home Improvement</Nav.Link>
                  <Nav.Link href="#features"
                  style={{
                    marginLeft: "30px",
                     marginRight: "30px"
                  }}>Landscaping</Nav.Link>
                  <Nav.Link href="#pricing"
                  style={{
                    marginLeft: "30px",
                     marginRight: "30px"
                  }}
                  >Automotive</Nav.Link>
                  <Nav.Link href="#pricing"
                  style={{
                    marginLeft: "30px",
                     marginRight: "30px"
                  }}
                  >Personal Care</Nav.Link>
                  <Nav.Link href="#pricing"
                  style={{
                    marginLeft: "30px",
                     marginRight: "30px"
                  }}
                  >Pet Care</Nav.Link>
                  <Nav.Link href="#pricing"
                  style={{
                    marginLeft: "30px",
                     marginRight: "30px"
                  }}
                  >Designer & Artist</Nav.Link>
                  <Nav.Link href="#pricing"
                  style={{
                    marginLeft: "30px",
                     marginRight: "30px"
                  }}
                  >Events</Nav.Link>
                  <Nav.Link href="#pricing"
                  style={{
                    marginLeft: "30px",
                     marginRight: "30px"
                  }}
                  >Technology</Nav.Link>
                
                  <Nav.Link className="text-left" href="#pricing"
                  style={{
                    marginLeft: "750px",
                     marginRight: "0px"
                  }}
                  >About Us </Nav.Link>
                
                  <Nav.Link href="#pricing">?</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </>
        );
      }
      
      export default NavComp;
