import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Image } from 'react-bootstrap';
import SubscriptionBox from './SubscriptionBox';

const Home = () => {

  async function checkout() {
    console.log("asdasd");
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/payment",
        headers: { "Content-Type": "application/json" },
        //data will equal to payment fee of service id instead of items
        data: {
          id: 1,
          // items: [
          //   { id: 1, quantity: 3 },
          //   { id: 2, quantity: 1 },
          // ],
        },
      });
      console.log(response);
      if (response) {
        window.location = response.data.url;
      }
    } catch (e) {
      console.log(e);
    }
    // () => {
    //   fetch("http://localhost:3001/payment", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       items: [
    //         { id: 1, quantity: 3 },
    //         { id: 2, quantity: 1 },
    //       ],
    //     }),
    //   })
    //     .then((res) => {
    //       console.log(res)
    //       if (res.ok) return res.json();
    //       return res.json().then((json) => Promise.reject(json));
    //     })
    //     .then(({ url }) => {
    //       window.location = url;
    //     })
    //     .catch((e) => {
    //       console.error(e.error);
    //     });
    // };
  }

  const navigate = useNavigate();

  return (
    <div>
      <div className="App">
        <h1>This is the home page.</h1>
        <div className="card"></div>
        <button onClick={checkout}>Checkout</button>
        <button onClick={() => navigate("/signup")}>Signup</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
      <div>
        <Container style={{ marginTop: "473px" }}>
          <Row>
            <Col md={4}>
              <Image src="https://via.placeholder.com/367x225" thumbnail />
            </Col>
            <Col md={4}>
              <Image src="https://via.placeholder.com/367x225" thumbnail />
            </Col>
            <Col md={4}>
              <Image src="https://via.placeholder.com/367x225" thumbnail />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className="d-flex justify-content-center" style={{ padding: "40px" }}> 
          <h1>Wanna be in the know about the Pros? Subscribe</h1>
        </Container> 
        <Container className="d-flex justify-content-center" style={{ padding: "10px" }}> 
        <h6 style={{ fontWeight: 'bold' }}>Join  Our Email list by adding your email below</h6>
        </Container> 
       
        <SubscriptionBox />
    </div>
    </div>
  );
};

export default Home;
