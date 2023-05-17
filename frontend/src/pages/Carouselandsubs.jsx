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
                src="https://via.placeholder.com/365x225"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/365x225"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/365x225"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                src="https://via.placeholder.com/365x225"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/365x225"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/365x225"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                src="https://via.placeholder.com/365x225"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/365x225"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/365x225"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
          <h1>Wanna be in the know about the Pros? Subscribe</h1>
        </Container> 
        <Container className="d-flex justify-content-center" style={{ padding: "10px" }}> 
        <h6 style={{ fontWeight: 'bold' }}>Join  Our Email list by adding your email below</h6>
        </Container> 
       
        <SubscriptionBox />
    </div>
    </div>
  );
};

export default Carouselandsub;
