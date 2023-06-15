import react from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../CSS/HeroComp.css"

import HomeBanner from "../images/home-banner.png"
const HeroComp = ({ title, subtitle, backgroundImage }) => {
  return (
   

      <Container fluid className="banner-container p-0">
        <Image src={HomeBanner} alt="home-banner"  />
      </Container>
 
  );
};

export default HeroComp;