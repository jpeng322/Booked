import { useState, useEffect } from "react";
import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import { FaStar } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import SearchBarProviderCardPg from "../components/SearchBarProviderCardPg";
import "../CSS/ProviderCard.css";
import NavBar from "../components/Navbar";
import HifiFooter from "../components/Footer/HifiFooter";

import avatar from "../images/avatar.png";
import SearchBar from "../components/SearchBar";

import { useLoaderData, useNavigate } from "react-router-dom";
const ProviderCard = (props) => {
  // const initialProviders = useLoaderData();
  const initialProviders = props.providers;


  const navigate = useNavigate();
  const [providers, setProviders] = useState(initialProviders);

  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 4;
  const totalItems = providers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber) => {
    setActivePage(pageNumber);
  };


  useEffect(() => {
    setProviders(initialProviders)
  }, [initialProviders]);


  const providersToDisplay = providers.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  const handleSubmit = (event) => {
    window.location.href = "/profile";
  };

  console.log(providersToDisplay);
  return (
    <>
      <SearchBarProviderCardPg />
      <Container fluid className="p-5">
        <Row className="d-flex justify-content-center">
          {providersToDisplay.map((provider, index) => (
            <Row className="provider-card-container">
              <Col className="" key={index}>
                <div className="provider-card">
                  <div className="provider-card-header">
                    <img
                      src={provider.profile_pic}
                      alt={props.name}
                      className="provider-logo"
                    />
                    <div className="d-flex flex-column">
                      <p className="business-name">
                        {" "}
                        {provider.provider_businessName}
                      </p>

                      <p className="business-location">
                        {provider.provider_areaServed}
                      </p>
                    </div>

                    <div className="rating">
                      <span className="numeric-rating">
                        {/* {provider.rating.toFixed(1)} */}
                      </span>
                      {/* {[
                      ...Array(
                        Math.min(5, Math.max(0, Math.round(provider.rating)))
                      ),
                    ].map((star, index) => (
                      <FaStar key={index} />
                    ))} */}
                    </div>
                  </div>
                  <Row className="center-images">
                    <Col className="image-container">
                      {provider.image.map((image, index) => (
                        <div className="d-flex justify-content-center">
                          <Image
                            key={index}
                            src={image.image_url}
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
                    <Col className="d-flex justify-content-between">
                      <div className="provider-attributes">
                        <div className="type-highlight">
                          {provider.provider_businessType}
                        </div>
                        {provider.service.map((service) => (
                          <div
                            className="skill-highlight"
                            key={service.service_id}
                          >
                            {service.service_type}
                          </div>
                        ))}
                      </div>
                      <div className="justify-content-end">
                        <Button
                          className="viewprofile"
                          variant="warning"
                          // onClick={handleSubmit}
                          onClick={() =>
                            navigate(
                              `/provider/profile/${provider.provider_id}`
                            )
                          }
                        >
                          View Profile
                        </Button>
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
                <Pagination.First
                  onClick={() => handleClick(1)}
                  disabled={activePage === 1}
                />
                <Pagination.Prev
                  onClick={() => handleClick(activePage - 1)}
                  disabled={activePage === 1}
                />
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
                <Pagination.Next
                  onClick={() => handleClick(activePage + 1)}
                  disabled={activePage === totalPages}
                />
                <Pagination.Last
                  onClick={() => handleClick(totalPages)}
                  disabled={activePage === totalPages}
                />
              </Pagination>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default ProviderCard;
