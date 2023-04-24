import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { FaStar } from 'react-icons/fa';


const ProviderCard = (props) => {
  return (
    <Container>
      <Row>
        {props.providers.map((provider, index) => (
          <Col key={index}>
            <div className="provider-card">
              <div>
                <h3 className="text-left"><img src={props.logo} alt={props.name} className="provider-logo" />{provider.name}</h3>
                <p className="business-location">{provider.business || provider.location}</p>
                <div className="rating">
                  <span className="numeric-rating">{provider.rating.toFixed(1)}</span>
                  {[...Array(Math.min(5, Math.max(0, Math.round(provider.rating))))].map((star, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
              </div>
              <Row className="center-images">
                <Col>
                  {provider.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      thumbnail
                      className="image"
                      style={{ width: 230, height: 180 }}
                    />
                  ))}
                </Col>
              </Row>
              <Row >
                <Col>
                    <div className="text-left">
                        <div className="type-highlight">{provider.type}</div>
                        <div className="skill-highlight">{provider.skill}</div>
                        <div className="skill-highlight">{provider.skill}</div>
                    </div>
                    <div className="justify-content-end">
                    <button className="btn" >View Profile</button>
                    </div>                  
                </Col>
                </Row>
             
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProviderCard;

