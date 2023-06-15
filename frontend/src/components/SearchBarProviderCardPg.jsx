import React, { useState } from 'react';
import { Container, Col, Row, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/SearchBar.css'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
    // window.location.href = `/search?query=${searchTerm}`
    window.location.href = "/provider"
  };

  return (
   <div className='search-br2-container'>
    <Container className="d-flex">
      <Row>
          <Row className="d-flex justify-content-center">
            <Row>
              <Form
                className="mx-auto p-2 d-flex"
                role="search"
                style={{
                  fontWeight: '600',
                  height: '50px',
                }}>
                
                  <FormControl
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleChange}
                    style={{
                      width: '400px',
                      height: '49px',
                      borderRadius: '50px',
                      borderColor: 'brown',
                      paddingRight: '40px',
                    }}
                  />
                  <Button
                    className="search-icon ml-auto provider-custom-button"
                    variant="outline-primary"
                    onClick={handleSubmit}
                    size="sm"
                    style={{
                      color: 'brown',
                      position: 'relative',
                      bottom: "-20px",
                      marginLeft: '-50px',
                      transform: 'translateY(-50%)',
                      border: 'none',
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                      cursor: 'pointer'
                    }}>
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                  </Form>
                  <br></br>
                </Row>
              </Row>
            
          <Row>
              
            </Row>
      <Row>
          
        
          <div className="d-flex second-container">
          <Col>
             
             <Button className="sortby" variant="warning">Sort By<span><sup>V</sup></span></Button> 
     
        
             <span >
               <a href="#" className="text">
                 Filter + 
               </a>
             </span>
      
         </Col>
              <Col>
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
          </Row>
      </Row>
   
  
    </Container>
    </div> 
  );
}

export default SearchBar;



{/* <div
            className="row align-items-center"
            style={{
              width: '400px',
              margin: '20px',
            }}
          ></div> */}