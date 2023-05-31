import React from "react";
import axios from "axios";
import ServiceSpecialties from "../components/ServiceSpecialities";
import Reviews from "../components/ReviewTab/Reviews";
import ReviewsTabs from "../components/ReviewTab/ReviewTabs";
import ProviderPage from "./ProviderPage";
import BackgroundCheck from "../components/ReviewTab/Credentials";

const reviews = [
  {
    stars: 4,
    name: "Jay Z.",
    time: "1hr",
    comment:
      "I recently had Alex install my kitchen cabinets and I'm very impressed with his work. He arrived on time and got right to work, showing his professionalism from the start. He was able to efficiently install the cabinets without any issues, and the end result is fantastic. The cabinets look great and are securely mounted.",
  },
  { stars: 1.5, name: "Bey N.", time: "4hr", comment: "No no!" },
  { stars: 5, name: "Brad P.", time: "7hr", comment: "Love it!" },
  {
    stars: 2,
    name: "Justin B.",
    time: "12hr",
    comment: "Not what I expected.",
  },
  { stars: 5, name: "Dwayne J.", time: "5hr", comment: "Amazing!" },
  { stars: 3, name: "Ryan K.", time: "2hr", comment: "It's okay." },
];

const Profile = () => {
  async function createService(e) {
    e.preventDefault();
    try {
      console.log(localStorage.getItem("token"));
      const response = await axios({
        method: "post",
        url: `http://localhost:${import.meta.env.VITE_PORT}/service`,
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
      <Reviews reviews={reviews} />
      <ReviewsTabs />
      <BackgroundCheck />
    </>
  );
};

export default Profile;
