import react from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../CSS/HeroComp.css"

import HomeBannerLongSVG from "../images/home-banner-long-svg.svg"
import LeftBanner from "../images/left-banner.svg"


const HeroComp = ({ title, subtitle, backgroundImage }) => {
  return (
   

      <Container fluid className="banner-container p-0 d-flex flex-column">

      <Image className="show-big" src={HomeBannerLongSVG} />
      <Image className="show-small" src={LeftBanner} />
      </Container>
 
  );
};

export default HeroComp;