import React from "react";
import { useNavigate } from "react-router-dom";

const OnboardingSurvey = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Select all your preferences</div>
      <div>
        <button>Electricity</button>
        <button>Plumbing</button>
        <button>Beauty</button>
        <button>Tutoring</button>
        <button>Tatoos</button>
      </div>
      <div>
        <button onClick={() => navigate("/recommendations")}>Done</button>
        <button onClick={() => navigate("/profile")}> Skip</button>
      </div>
    </>
  );
};

export default OnboardingSurvey;
