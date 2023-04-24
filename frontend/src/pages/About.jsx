import React from "react";
import "../App.css";
import { Col, Container, Row, Accordion } from "react-bootstrap";


const About = () => {
    return (
        <>
            <Row>
                <Col>
                    <div style={{ height: '247px',  backgroundColor: 'white' }}>
                        NAVBAR
                    </div>
                </Col>
            </Row>

            <Container style={{ backgroundColor: '#D9D9D9', height: '491px' }} fluid>
                <Row >
                    <Col xs="6" lg="4" style={{ margin: '3rem' }}>
                        <p style={{ fontSize: '20px' }}>How ______ works</p>

                        <p style={{ fontSize: '70px', fontWeight: 'bold' }}>Booking,
                            Simplified.</p>
                    </Col>
                </Row>
            </Container>

            <Container style={{ marginTop: '3rem', fontSize: '20px' }} fluid>
                <Row >
                    <Col
                        lg={{ span: 8, offset: 0 }}
                    >
                        <p style={{ paddingLeft: '3rem' }}>________________ is the online destination for professionals and clients. Professionals can showcase their work, connect with new and existing clients, and build their business. Clients can discover new services and providers, book appointments online, and get inspired.</p>
                    </Col>
                </Row>

            </Container>

            <Container style={{ marginTop: '10rem', fontSize: '15px' }} fluid>
                <Row  >

                    <Col xs={12} lg={4} className="p-2" >
                        <div className="d-flex justify-content-center mb-5">
                            <div style={{ backgroundColor: 'grey', width: '65px', height: '65px' }}></div>
                        </div>

                        <p className="m-5">Get the help you need — when you need it — with upfront pricing and instant booking for handymen, landscapers and more.</p>
                    </Col>
                    <Col xs={12} lg={4} className="p-2" >
                        <div className="d-flex justify-content-center mb-5">
                            <div style={{ backgroundColor: 'grey', width: '65px', height: '65px' }}></div>
                        </div>

                        <p className="m-5">Easily schedule beauty and wellness appointments to keep your looking fresh and your best year-round.</p>
                    </Col>
                    <Col xs={12} lg={4} className="p-2" >
                        <div className="d-flex justify-content-center mb-5">
                            <div style={{ backgroundColor: 'grey', width: '65px', height: '65px' }}></div>
                        </div>

                        <p className="m-5">Find information and inspiration to kick-start your wedding planning — and connect with trusted pros to bring your visions to life.</p>
                    </Col>

                </Row>
            </Container>

            <div className="d-flex justify-content-center">
                <div style={{ width: '204px' ,height: '35px', borderRadius: '10px', background: '#D9D9D9', marginTop: '5rem'}}>

                </div>

            </div>

            <Container style={{  marginTop: '10rem', paddingBottom: '20rem' }} fluid>
                <Row>
                    <Col xs={12} lg={6} >
                        <p style={{ fontSize: '45px', fontWeight: 'bold', paddingLeft: '3rem' }}>Frequently asked <br /> questions</p>
                    </Col>

                    <Col xs={12} lg={6} style={{ paddingRight: '4rem' }}>
                        <Accordion className="custom-accordion" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header >How do I contact service support?</Accordion.Header>
                                <Accordion.Body >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How do I contact service support?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Is _________ free to use?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How do pros become _______ certified?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Col>
                </Row>
            </Container>







        </>
    )
}

export default About;