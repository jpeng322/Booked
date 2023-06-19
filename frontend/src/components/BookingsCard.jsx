import React from "react";
import { Image, Card } from "react-bootstrap";
import PlaceholderImg from "../images/placeholder-image.png";
import avatar from "../images/avatar.png";
import Carousel from "react-multi-carousel";
import { StarIcon } from "../assets/Icons/";
function BookingsCard({
  profilePic,
  firstImage,
  businessName,
  areaServed,
  startingPrice,
}) {
  return (
    <Card>
      <Card.Img variant="top" src={firstImage} />
      <Card.Body>
        <Card.Title className="d-flex gap-3">
          <Image className="provider-pic p-0 m-0" src={profilePic} alt="profile-pic" />
          <div>{businessName}</div>
        </Card.Title>
        <Card.Text className="d-flex ">I serve in {areaServed}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="footer-rating">
          {" "}
          <span className="me-1 mb-1">
            <StarIcon />
          </span>
          4.9 <span className="ms-1"> (679)</span>
        </div>
        <div>STARTING AT ${startingPrice}</div>
      </Card.Footer>
    </Card>
  );
}

export default BookingsCard;
