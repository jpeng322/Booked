import React from "react";
import { Container, Col, Row, Image, Card, CardGroup } from "react-bootstrap";
import PlaceholderImg from "../images/placeholder-image.png";
import avatar from "../images/avatar.png";
import Carousel from "react-multi-carousel";



function BookingsCard() {
  return (
   
        <Card>
          <Card.Img variant="top" src={PlaceholderImg} />
          <Card.Body>
            <Card.Title className="d-flex gap-3">
              <Image className="provider-pic" src={avatar} alt="profile-pic" />
              <div>Bob's motorcyle repair</div>
            </Card.Title>
            <Card.Text className="d-flex ">
              I specialize in Harleys and Honda powersports bike...
            </Card.Text>
            <Card.Text className="d-flex gap-3">
              <div>
                <svg
                  style={{ width: 25 }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  {" "}
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </div>
              <div>
                4.9 <span> (679)</span>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div>STARTING AT $40</div>
          </Card.Footer>
        </Card>

  );
}

export default BookingsCard;
