import React from "react";
import { useNavigate, Routes, Route, BrowserRouter } from "react-router-dom";
import NavComp from "../components/Navbar";
import HeroComp from "../components/HeroComp";
import OtherComp from "../components/OtherComp";
import SearchBar from "../components/SearchBar";
import FooterComp from "../components/FooterComp";
import {Container} from "react-bootstrap"
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
        <NavComp />
      
        <HeroComp/>
        <Container>
        <div className="card"></div>
        <button onClick={checkout}>Checkout</button>
        <button onClick={() => navigate("/signup")}>Signup</button>
        <button onClick={() => navigate("/login")}>Login</button>
        </Container>
      </div>
      <h4 className="text-center">Find what you are looking for</h4>
      <SearchBar/>
      <OtherComp/>
      <FooterComp/>
    </div>  
  );
};

export default Home;
