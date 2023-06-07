import React from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import providers from '../../providers.js'; 
import "../../CSS/Credentials.css"

function BackgroundCheck() {
  const cred = providers
  .filter(provider => provider.name === "GR's Auto Care")
  .reduce((result, provider) => {
    if (provider.background && provider.background.length > 0 && provider.background[0].check === "yes") {
      result.push({
        mark: provider.background[0].mark,
        company: provider.background[0].company
      });
    }
    return result;
  }, []);
  console.log("testing", cred[0].mark)
  return (
    <Container className='main-container'>
      <Row>
        <Col>
            <div>
              <h3>Credentials</h3>
              <br>
              </br>
            </div>
            <div>
              <h4>Background Check {cred[0].mark}</h4>
              <p className='par'>{cred[0].company}</p>
            </div>
        
            
        </Col>
      </Row>
    </Container>
  );
}

export default BackgroundCheck;
