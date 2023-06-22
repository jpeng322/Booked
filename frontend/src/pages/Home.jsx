import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SubscriptionBox from "./SubscriptionBox";
import Carouselandsub from "./Carouselandsubs.jsx";

import NavComp from "../components/Navbar";
import HeroComp from "../components/HeroComp";
import OtherComp from "../components/OtherComp";
import SearchBar from "../components/SearchBar";
import FooterComp from "../components/FooterComp";

import HifiFooter from "../components/Footer/HifiFooter.jsx";

import LoggedInNavbar from "../components/LoggedInNavbar";
import Select from "react-select";

import "../CSS/SearchBar.css";

const Home = (props) => {
  const onboardedProviders = useLoaderData();

  console.log(onboardedProviders);

  const [selected, setSelected] = useState(null);
  async function checkout() {
    console.log("asdasd");
    try {
      const response = await axios({
        method: "post",
        url: `${import.meta.env.VITE_PORT}/payment`,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Search term:", searchTerm);
    // window.location.href = `/search?query=${searchTerm}`
    // window.location.href = "/providers/all";
    return navigate(`/providers/${selected.value}`);
  };

  const navigate = useNavigate();

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  return (
    <div>
      <div className="App">
        <HeroComp />

        <div
          style={{
            backgroundColor: "#F9EDB4",
            border: "red",
          }}
          className="m-0 p-0 d-flex flex-column justify-content-center align-items-center"
        >
          <SearchBar onboardedProviders={onboardedProviders} />

          <Carouselandsub />
        </div>
      </div>
    </div>
  );
};

export default Home;
