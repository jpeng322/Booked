import react from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroComp = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="d-lg-flex"
      style={{
        backgroundColor: "grey",
        backgroundSize: "cover",
        height: "458px",
        display: "flex",
        alignItems: "center",
        color: "white",
        fontSize: "3rem",
        textAlign: "center"

      }}
    >
      <Container>
        <Row>
          <Col>
        <h2 className="">Welcome Message That Says Stuff </h2>
          </Col>
        </Row>
      </Container>
     
    </div>
  );
};

export default HeroComp;