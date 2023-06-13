import react from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../CSS/HeroComp.css"

const HeroComp = ({ title, subtitle, backgroundImage }) => {
  return (
   

      <Container fluid className="banner-container">
        <Image src="banner_booked_zip.png" fluid />
      </Container>
 
  );
};

export default HeroComp;