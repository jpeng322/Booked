import React from "react";
import {Image, Card} from "react-bootstrap";
import PlaceholderImg from "../images/placeholder-image.png";
import avatar from "../images/avatar.png";
import Carousel from "react-multi-carousel";
import { StarIcon } from "../assets/Icons/";
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
      </Card.Body>
      <Card.Footer>
        <div className="footer-rating">
          {" "}
          <span className="me-1 mb-1">
          <StarIcon />
          </span>
          4.9 <span className="ms-1"> (679)</span>
        </div>
        <div>STARTING AT $40</div>
      </Card.Footer>
    </Card>
  );
}

export default BookingsCard;
