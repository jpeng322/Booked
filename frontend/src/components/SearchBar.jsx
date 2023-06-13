import React, { useState } from 'react';
import { Container, Row, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <Container className="d-flex justify-content-center">
      <div className="text-center">
        <h1>Find what you are looking for</h1>
        <Form
          className="mx-auto p-2 d-flex align-items-center"
          role="search"
          style={{
            fontWeight: '600',
            height: '50px',
          }}
        >
          <Row className="align-items-center justify-content-center">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleChange}
              style={{
                width: '600px',
                height: '49px',
                borderRadius: '50px',
                borderColor: 'grey',
                paddingRight: '40px',
              }}
            />
            <Button
              className="search-icon ml-auto"
              variant="outline-primary"
              onClick={handleSubmit}
              style={{
                position: 'absolute',
                top: '100%',
                right: '5px',
                transform: 'translateY(-50%)',
                border: 'none',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                cursor: 'pointer',
              }}>
              {/* <FontAwesomeIcon icon={faSearch} /> */}
            </Button>
          </Row>
        </Form>

        <div className="d-flex mx-auto justify-content-center">
          <div
            className="row align-items-center"
            style={{
              width: '400px',
              margin: '20px',
            }}
          >
            <div className="col">
              <a href="#">Most Popular</a>
            </div>

            <div className="col">
              <span className="border-start border-end">
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
      </div>
    </Container>
  );
}

export default SearchBar;
