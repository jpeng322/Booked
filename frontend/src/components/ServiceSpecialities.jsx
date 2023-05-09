import React from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import providers from '/src/providers.js'; 


function ServiceSpecialities() {
  const services = providers
    .filter(provider => provider.name === "Business NameA") // Filter providers by business name
    .reduce((result, provider) => {
      if (provider.label === "Window cleaning (interior)" || provider.label === "Fridge cleaning" || provider.label === "Oven cleaning" || provider.label === "Laundary") {
        result.push({
          label: provider.label,
          checked: provider.checked
        });
      }
      return result;
    }, []);

  return (
    <Container>
      <Row>
        <Col>
            <div>
              <h3>Service Specialities</h3>
              <br>
              </br>
            </div>
           <div>
              <h3>Extra services</h3>
            </div>
              {services.map((service, index) => (
                <div>
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={service.label}
                  checked={service.checked}
                  
               
                />
                </div>
              ))}
            
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceSpecialities;
