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
    <div className="d-flex justify-content-center pt-5 pb-5" style={{ padding: "20px" }}>
      <Form onSubmit={handleSubmit} className="p-2 border rounded" style={{ width: '550px', height: '66px', backgroundColor:'white', bordeColor:'black'}}>
        <Form.Group controlId="formEmail" className="d-flex align-items-center">
          <Form.Control
            type="email"
            placeholder="YourNameH3r3@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mr-2 border-0"
            style={{color:'#8F9779', 'font-size': '28px'}}
          />
          <Button style={{backgroundColor:"#8F9779", border:"#87A96B", 'font-size': '25px'}} variant="primary" type="submit">
            Subscribe
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SubscriptionBox;
