import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Signup</div>
      <form>
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <button onClick={() => navigate("/preferences")}>Sign Up</button>
      </form>
    </>
  );
};

export default Signup;
