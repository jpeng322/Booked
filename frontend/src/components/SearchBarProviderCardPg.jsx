import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/SearchBar.css";
import SearchBarDynamic from "./SearchBarDynamic";
function SearchBar() {
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Search term:", searchTerm);
  //   // window.location.href = `/search?query=${searchTerm}`
  //   window.location.href = "/providers/all";
  // };

  return (
    <Container fluid className="search-br2-container  ">
      {/* <Row className=''> */}
      <SearchBarDynamic compClassName="search-br-2" />
      {/* <Row className="d-flex justify-content-center">
        <Row>
          <Form
            className="mx-auto p-2 d-flex border sort-search-form"
            role="search"
          >
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleChange}
              className="sort-search"
            />
            <Button
              className="search-icon ml-auto provider-custom-button"
              variant="outline-primary"
              onClick={handleSubmit}
              size="sm"
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Row>
      </Row> */}

      <Row></Row>
      <Row>
        <div className="d-flex second-container">
          <Col className="sortby-container">
            <Button className="sortby" variant="warning">
              Sort By
              <span className="ms-1">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="css-i6dzq1"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </Button>

            <span>
              <p>Filter +</p>
            </span>
          </Col>
          <Col className="sort-button-container">
            <span>
              <Button className="wide-button" variant="warning">
                Category +
              </Button>
            </span>

            <span>
              <Button className="wide-button" variant="warning">
                Urgency +
              </Button>
            </span>

            <span>
              <Button className="wide-button" variant="warning">
                Price Range +
              </Button>
            </span>

            <span>
              <Button className="wide-button" variant="warning">
                Duration +
              </Button>
            </span>

            <span>
              <Button className="wide-button" variant="warning">
                Distance +
              </Button>
            </span>

            <span>
              <Button className="wide-button" variant="warning">
                Rating +
              </Button>
            </span>
          </Col>
        </div>
        {/* </Row> */}
      </Row>
    </Container>
  );
}

export default SearchBar;

{
  /* <div
            className="row align-items-center"
            style={{
              width: '400px',
              margin: '20px',
            }}
          ></div> */
}
