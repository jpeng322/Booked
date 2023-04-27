import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    number: "",
  };

  const [values, setValues] = useState(initialValues);
  async function submitSignup(e) {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/auth/signup",
        data: {
          fname: values.fname,
          lname: values.lname,
          email: values.email,
          password: values.password,
          number: values.number,
        },
      });

      if (response) {
        console.log(response);
        navigate("/preferences")
      }
    } catch (e) {
      console.log("error");
    }
  }
  return (
    <>
      <div>Signup</div>
      <form onSubmit={submitSignup}>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={values.fname}
          onChange={handleInputChange}
        />

        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={values.lname}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
        />
        <label htmlFor="number">Number:</label>
        <input
          type="text"
          id="number"
          name="number"
          value={values.number}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          onClick={() => {
            // navigate("/preferences");
            // console.log("clicked");
          }}
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;
