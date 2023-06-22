import {
  Container,
  Col,
  Row,
  Image,
  Card,
  CardGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function HifiFooter() {
  return (
    <div className="footer-container">
      <div className="list-items">
        <Row className="border-bottom">
          <Col className="socials">
            <a href="/about">About</a>
          </Col>
          <Col className="socials">Careers</Col>
          <Col className="socials">Subscriptions</Col>
          <Col className="socials">Terms & Privacy</Col>
          <Col className="socials">FAQs</Col>
        </Row>
      </div>

      <div className="d-flex flex-column gap-3">
        <h4 className="text-center">Socials</h4>

        <Row>
          <Col className="d-flex gap-4 justify-content-center">
            <a href="https://www.instagram.com">
              <FaInstagram size={40} />
            </a>
            <a href="https://www.facebook.com">
              <FaFacebook size={40} />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter size={40} />
            </a>
            <a href="https://www.youtube.com">
              <FaYoutube size={40} />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HifiFooter;
