import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);
  async function submitLogin(e) {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/auth/login",
        data: {
          email: values.email,
          password: values.password,
        },
      });

      if (response) {
        console.log(response);
        const token = response.data.token;
        navigate("/profile");
        localStorage.setItem("token", token);
      }
    } catch (e) {
      console.log("error");
    }
  }
  return (
    <>
      <div>Login</div>
      <form onSubmit={submitLogin}>
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

        <button
          type="submit"
          onClick={() => {
            // navigate("/preferences");
            // console.log("clicked");
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
