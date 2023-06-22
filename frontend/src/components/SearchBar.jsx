import React, { useState } from "react";
import { Container, Row, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../CSS/SearchBar.css";

import Select from "react-select";

function SearchBar({ onboardedProviders }) {
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const listOfProviderObjects = onboardedProviders.map((provider) => {
    return {
      value: `/provider/profile/${provider.provider_id}`,
      label: `Provider: ${provider.provider_businessName}`,
    };
  });

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Search term:", searchTerm);
  //   return navigate("/providers/all")

  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    return navigate(`${selected.value}`);
  };

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const options = [
    {
      value: "/providers/home_improvement",
      label: "Category: Home Improvement",
    },
    { value: "/providers/automotive", label: "Category: Automotive" },
    { value: "/providers/landscaping", label: "Category: Landscaping" },
    { value: "/providers/personal_care", label: "Category: Personal Care" },
    { value: "/providers/pet_care", label: "Category: Pet Care" },
    { value: "/providers/designer_artist", label: "Category: Designer & Art" },
    { value: "/providers/events", label: "Category: Events" },
    { value: "/providers/technology", label: "Category: Technology" },
    ...listOfProviderObjects,
  ];

  return (
    <Container className="searchbar-container d-flex justify-content-center">
      <div className="text-center">
        <h1>Find what you are looking for</h1>
        <div className="search-dropdown-container text-start mt-4 mb-4">
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            options={options}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            onChange={handleChange}
          />
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1 search-glasses"
            onClick={handleSubmit}
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        {/* <Form className="searchbar-form  " role="search" style={{}}>
          <Row className=" searchbar-input-container ">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleChange}
              
              style={
                {
                  // width: '600px',
                  // height: '49px',
                  // borderRadius: '50px',
                  // borderColor: 'grey',
                  // paddingRight: '40px',
                }
              }
            />
            <Button
              className="search-icon ml-auto custom-button"
              variant="outline-primary"
              onClick={handleSubmit}
              size="sm"
              style={
                {
                  // color: 'black',
                  // position: 'relative',
                  // bottom: "25px",
                  // marginLeft: '550px',
                  // transform: 'translateY(-50%)',
                  // border: 'none',
                  // backgroundColor: 'transparent',
                  // boxShadow: 'none',
                  // cursor: 'pointer',
                }
              }
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Row>
        </Form> */}

        <div className="search-bar-filters d-flex mx-auto justify-content-center">
          <div className="col">
            <a href="#">Most Popular</a>
          </div>

          <div className="col">
            <span className="">
              <a href="#" className="col">
                Recommended
              </a>
            </span>
          </div>

          <div className="col">
            <a href="#" className="alignContents">
              Filter+
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SearchBar;
