import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../CSS/ProviderProfile.css";

const ProviderPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Container fluid className="provider-profile-container d-flex p-5">
      <Row className="provider-information">ProviderInfo</Row>
      <Row className="provider-form-container">
        {/* <Form>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <h2>$150</h2>
          <h3>Starting cost</h3>
          <Form.Group className="mb-3" controlId="formZipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip code" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formScheduling">
            <Form.Label>Scheduling</Form.Label>
            <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEstimatedHours">
            <Form.Label>Estimated Hours</Form.Label>
            <Form.Control type="number" placeholder="Hours" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formProjectType">
            <Form.Label>Project Type</Form.Label>
            <Form.Control type="text" placeholder="Select answer" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}
        <form className="provider-form">
          <div className="provider-pricing">
            <h2>$150</h2>
            <h3>Starting cost</h3>
          </div>
          <div className="provider-input-group">
            <label for="zip-code">Zip Code</label>
            <input type="number" id="zip-code" name="zip-code" />
          </div>
          <div className="provider-input-group">
            <label for="scheduling">Scheduling</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="provider-input-group">
            <label for="hours">Estimated Hours</label>
            <input type="number" id="hours" name="hours" />
          </div>
          <div className="provider-input-group">
            <label for="project">Project Type</label>
            <input type="text" id="project" name="project" />
          </div>
          <button className="provider-form-button">Check availability</button>
          <p>
            Responds in about <span className="fw-bold">1 hour</span>
          </p>
        </form>
      </Row>
    </Container>
  );
};

export default ProviderPage;
