import React from "react";
import "../App.css";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import bgImg from '../images/about-page-img.png'
import img1 from '../images/about-card1.png'
import img2 from '../images/about-card2.png'
import img3 from '../images/about-card3.png'
import '../CSS/about.css'


const About = () => {
    return (
        <>
            {/* <Row>
                <Col>
                    <div
                        style={{
                            height: '247px',
                            backgroundColor: 'white'
                        }}
                    >
                        NAVBAR
                    </div>
                </Col>
            </Row> */}

            <Container
                className="about-image"
                style={{
                    // border: '1px solid black',
                    backgroundImage: `url(${bgImg})`,
                    backgroundRepeat: "no-repeat",
                    // backgroundAttachment: 'fixed',
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    overflow: 'auto',
                    height: '590px'
                }}
                fluid
            >
                <Row
                    style={{
                        // border: '1px solid black',
                        height: '100%',
                    }}
                >
                    <Col
                        xs="6" lg="3"
                        style={{
                            // border: '1px solid black',
                            // margin: '3rem',
                            // alignItems: 'flex-end'
                            // padding: '0px 0px 0px 2px',
                            alignSelf: 'flex-end',
                        }}>
                        <p
                            className="about-image-text"
                            style={{
                                fontSize: '23px'
                            }}
                            >
                            How <u><b>Booked</b></u> works</p>

                        <p
                            className="about-image-text"
                            style={{
                                fontSize: '68px',
                                fontWeight: '500'
                            }}
                            >
                            Booking,
                            Simplified.</p>
                    </Col>
                </Row>
            </Container>

            <Container
                style={{
                    // border: '1px solid black',
                    marginTop: '4rem',
                    fontSize: '20px'
                }}
                fluid
            >
                <Row >
                    <Col
                        lg={{ span: 8, offset: 0 }}
                    >
                        <p style={{
                            paddingLeft: '3rem',
                            fontSize: '24px',
                            textAlign: 'left',
                            fontWeight: '400'

                        }}>
                            <b>Booked</b> is the online destination for professionals and clients. Professionals can showcase their work, connect with new and existing clients, and build their business. Clients can discover new services and providers, book appointments online, and get inspired.
                        </p>
                    </Col>
                </Row>

            </Container>

            <Container
                style={{
                    // border: '1px solid red',
                    marginTop: '10rem',
                    fontSize: '15px'
                }}
                fluid
            >
                <Row
                    style={{
                        // border: '1px solid black'
                    }}
                >

                    <Col xs={12} lg={4}
                        className="p-2"
                        style={{
                            // border: '1px solid red',

                        }}
                    >
                        <Col
                            lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }}
                            className="d-flex justify-content-center mb-5"
                        // style={{
                        //     border: '1px solid red',

                        // }}
                        >
                            <img
                                src={img1}
                                style={{
                                    objectFit: 'cover',
                                    // aspectRatio: 16/9
                                }} />
                        </Col>

                        <Col
                            lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }}
                        >
                            <p>Get the help you need — when you need it — with upfront pricing and instant booking for handymen, landscapers and more.</p>
                        </Col>

                    </Col>
                    <Col xs={12} lg={4} className="p-2" >
                        <Col
                            lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }}
                            className="d-flex justify-content-center mb-5">
                            <img
                                src={img2}
                                style={{
                                    objectFit: 'cover',
                                    // aspectRatio: 16/9
                                }} />


                        </Col>
                        <Col
                            lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }}
                        >
                            <p>Easily schedule beauty and wellness appointments to keep your looking fresh and your best year-round.</p>
                        </Col>

                    </Col>
                    <Col xs={12} lg={4}

                        className="p-2" >
                        <Col
                            lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }}

                            className="d-flex justify-content-center mb-5">
                            <img
                                src={img3}
                                style={{
                                    objectFit: 'cover',
                                    // aspectRatio: 16/9
                                }} />
                        </Col>

                        <Col
                            lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }}
                        >
                            <p
                            // className="m-5"
                            >
                                Find information and inspiration to kick-start your wedding planning — and connect with trusted pros to bring your visions to life.</p>
                        </Col>

                    </Col>

                </Row>
            </Container>



            <Container
                style={{
                    // border: '1px solid black',
                    marginTop: '10rem',
                    paddingBottom: '20rem'
                }} fluid>
                <Row
                    style={{
                        // border: '1px solid black'
                    }}
                >
                    <Col style={{
                        // border: '1px solid black'
                    }}
                        xs={12} lg={6} >
                        <p style={{
                            // border: '1px solid black',
                            fontSize: '45px',
                            fontWeight: '400',
                            paddingRight: '3rem',
                            // textAlign: 'center'
                        }}>Frequently asked <br /> questions</p>
                    </Col>

                    <Col xs={12} lg={6} style={{
                        // border: '1px solid black',
                        paddingRight: '4rem'
                    }}>
                        <Accordion className="custom-accordion"
                            style={{
                                // border: '1px solid black'
                            }}
                            flush
                        >
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
                                <Accordion.Header>Is Booked free to use?</Accordion.Header>
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
                                <Accordion.Header>How do pros become Booked certified?</Accordion.Header>
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