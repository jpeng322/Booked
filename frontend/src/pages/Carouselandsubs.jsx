import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SubscriptionBox from './SubscriptionBox';

const Carouselandsub = () => {

  return (
    <div>
      <div>
        <Container style={{ marginTop: "473px" }}>
          <Row>
          <Col md={4}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/home_img1.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3></h3>
                <p>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/hair.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/pluming.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Col>
          <Col md={4}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/home_img2.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3></h3>
                <p>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/coding.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/nail.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={4}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/home_img3.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3></h3>
                <p>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/pet.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/sound.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className="d-flex justify-content-center" style={{ padding: "40px" }}> 
          <h1>Wanna be in the know about the Pros? <span style= {{color: "#87A96B"}}>Subscribe</span></h1>
        </Container> 
        <Container className="d-flex justify-content-center" style={{ padding: "10px" }}> 
        <h6 style={{ fontWeight: 'bold', color:'#5072A7' }}>Join  Our Email list by adding your email below</h6>
        </Container> 
       
        <SubscriptionBox />
    </div>
    </div>
  );
};

export default Carouselandsub;
