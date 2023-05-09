import React from "react";
import CalendarComp from "../components/CalendarComp";
import axios from "axios"
import ServiceSpecialties from "../components/ServiceSpecialities";
import Reviews from "../components/Reviews"; 
// import proreviews from "../components/previews.js"; 
import ProviderPage from "./ProviderPage"

const reviews = [
  { stars: 4, content: "Great product!" },
  { stars: 5, content: "Love it!" },
  { stars: 2, content: "Not what I expected." },
  { stars: 5, content: "Amazing!" },
  { stars: 3, content: "It's okay." },
];


const Profile = () => {
  async function createService(e) {
    e.preventDefault();
    try {
      console.log(localStorage.getItem("token"))
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/service",
        data: {
          service_type: "Plumbing",
          payment_id: "asdasdasdasdasd",
          booking_id: 1125435,
          provider_id: 6345,
          // booking_date: request.body.booking_date,
          payment: 75,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response) {
        console.log(response);
        const token = response.data.token;
        navigate("/profile");
        localStorage.setItem("token", token);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div>Welcome Back!</div>
      {/* <CalendarComp />
      <button onClick={createService}>Create Service</button> */}
      <ProviderPage />
      <ServiceSpecialties />
      <Reviews reviews={reviews}/>
    </>
  );
};

export default Profile;
