import { useState } from "react";
import React from "react";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';
import { FaStar } from 'react-icons/fa';

import "../CSS/ProviderCard.css"

import avatar from "../images/avatar.png";
const ProviderCard = (props) => {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = props.providers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const providersToDisplay = props.providers.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );
  

  return (
    <Container fluid className="p-5">
      <Row className="d-flex justify-content-center">
        {providersToDisplay.map((provider, index) => (
          <Row>
            <Col className="" key={index}>
              <div className="provider-card">
                <div>
                  <h3 className="text-left">
                    <img
                      src={props.logo}
                      alt={props.name}
                      className="provider-logo"
                    />
                    {provider.name}
                  </h3>
                  <p className="business-location">
                    {provider.business || provider.location}
                  </p>
                  <div className="rating">
                    <span className="numeric-rating">
                      {provider.rating.toFixed(1)}
                    </span>
                    {[
                      ...Array(
                        Math.min(5, Math.max(0, Math.round(provider.rating)))
                      ),
                    ].map((star, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                </div>
                <Row className="center-images">
                  <Col className="image-container">
                    {provider.images.map((image, index) => (
                      <div className="d-flex justify-content-center">
                        <Image
                          key={index}
                          src={avatar}
                          thumbnail
                          className="image"
                          alt="no-image"
                          // style={{ width: 230, height: 180 }}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="text-left">
                      <div className="type-highlight">{provider.type}</div>
                      <div className="skill-highlight">{provider.skill}</div>
                      <div className="skill-highlight">{provider.skill}</div>
                    </div>
                    <div className="justify-content-end">
                      <button className="view-profile-btn">View Profile</button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        ))}
        <Row className="d-flex justify-content-center">
          <Col>
            <Pagination>
              <Pagination.First onClick={() => handleClick(1)} disabled={activePage === 1} />
              <Pagination.Prev onClick={() => handleClick(activePage - 1)} disabled={activePage === 1} />
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index}
                  active={index + 1 === activePage}
                  onClick={() => handleClick(index + 1)}
                  disabled={activePage === providersToDisplay}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next onClick={() => handleClick(activePage + 1)} disabled={activePage === totalPages} />
              <Pagination.Last onClick={() => handleClick(totalPages)} disabled={activePage === totalPages} />
            </Pagination>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ProviderCard;
