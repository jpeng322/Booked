import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SubscriptionBox = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className="d-flex justify-content-center" style={{ marginBottom: '825px', padding: "20px" }}>
      <Form onSubmit={handleSubmit} className="p-2 border rounded" style={{ width: '479px', height: '66px' }}>
        <Form.Group controlId="formEmail" className="d-flex align-items-center">
          <Form.Control
            type="email"
            placeholder="YourNameH3r3@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mr-2 border-0"
          />
          <Button variant="primary" type="submit">
            Subscribe
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SubscriptionBox;
