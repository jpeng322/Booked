import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SubscriptionBox from './SubscriptionBox';

const Carouselandsub = () => {

  return (
    <div>
      <div>
        
        <Container style={{ marginTop: "40px"}}>
          <Container className="d-flex justify-content-center" style={{ padding: "40px" }}> 
          <h1>Featured Business of the Week </h1>
        </Container> 
          <Row>
          <Col md={4}>
          <Carousel style={{ backgroundColor: 'transparent' }}>
            <Carousel.Item style={{ backgroundColor: 'transparent' }}>
              <img
                src="/home_img1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item style={{ backgroundColor: 'transparent' }}>
              <img
                src="/hair.png"
                alt="Second slide"
              />
            </Carousel.Item >
            <Carousel.Item style={{ backgroundColor: 'transparent' }}>
              <img
                src="/pluming.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          </Col>
          <Col md={4}>
          <Carousel>
            <Carousel.Item style={{ backgroundColor: 'transparent' }}>
              <img
                src="/home_img2.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item style={{ backgroundColor: 'transparent' }}>
              <img
                src="/coding.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item style={{ backgroundColor: 'transparent' }}> 
              <img
                src="/nail.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={4}>
          <Carousel>
            <Carousel.Item style={{ backgroundColor: 'transparent' }}>
              <img
                src="/home_img3.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item style={{ backgroundColor: 'transparent' }}>
              <img
                src="/pet.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item style={{ backgroundColor: 'transparent' }}>
              <img
                src="/sound.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className="d-flex justify-content-center" style={{ padding: "40px" }}> 
          <h1>Wanna be in the know about the Pros? <span style= {{color: "#8F9779"}}>Subscribe</span></h1>
        </Container> 
        <Container className="d-flex justify-content-center" style={{ padding: "10px" }}> 
        <p style={{ fontWeight: 'bold', color:'#5070A0', 'font-size':'22px', 'font-weight':'lighter', 'font-family': 'open sans'}}>Join  Our Email list by adding your email below</p>
        </Container> 
       
        <SubscriptionBox />
    </div>
    </div>
  );
};

export default Carouselandsub;
