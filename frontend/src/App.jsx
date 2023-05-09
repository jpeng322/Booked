import { useState } from "react";

import About from "../src/pages/About";
import "/src/App.css";
import ProviderCard from "./pages/ProviderCard";
import providers from "./providers";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LoginClient from "./pages/LoginClient";
import OnboardingSurvey from "./pages/OnboardingSurvey";
import Recommendations from "./pages/Recommendations";
import Profile from "./pages/Profile";
import CustomerAcc from "./pages/CustomerBookings";

import FavoriteProviders from "./components/FavoritesComp";
import ProviderPage from "./pages/ProviderPage"


import { fetchLogin, fetchSignup } from "./api";
import CustomerAccountContact from "./pages/CustomerAccountContact";

function App() {
  const [count, setCount] = useState(0);

  async function checkout() {

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/payment",
        headers: { "Content-Type": "application/json" },
        //data will equal to payment fee of service id instead of items
        data: {
          // id: 1
          items: [
            { id: 1, quantity: 3 },
            { id: 2, quantity: 1 },
          ],
        },
      });
      console.log(response);
      if (response) {
        window.location = response.data.url;
      }
    } catch (e) {
      console.log(e);
    }
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
  // }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "auth/loginClient",
      element: <LoginClient />,
      action: async ({ request }) => {
        try {
          const formData = await request.formData();
          const email = formData.get("email");
          const password = formData.get("password");
          return await fetchLogin(email, password);
        } catch (error) {
          return error;
        }
      },
    },
    {
      path: "auth/signup",
      element: <Signup />,
      action: async ({ request }) => {
        try {
          const formData = Object.fromEntries(await request.formData());
          const { email, password, firstName, lastName, phoneNumber } =
            formData;
          // console.log(email, password, firstName, lastName, phoneNumber);
          return await fetchSignup(
            email,
            password,
            firstName,
            lastName,
            phoneNumber
          );
        } catch (error) {
          return error;
        }
      },
    },
    {
      path: "auth/login",
      element: <Login />,
      action: async ({ request }) => {
        try {
          const formData = await request.formData();
          const email = formData.get("email");
          const password = formData.get("password");
          return await fetchLogin(email, password);
        } catch (error) {
          return error;
        }
      },
    },
    {
      path: "/customeraccount",
      element: <CustomerAccountContact />,
    },
    {
      path: "/preferences",
      element: <OnboardingSurvey />,
    },
    {
      path: "/recommendations",
      element: <Recommendations />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/customerbookings",
      element: <CustomerAcc />,
    },
    {
      path: "/carousel",
      element: <FavoriteProviders />,
    },
    {
      path: "/provider",
      element: <ProviderCard providers={providers} />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/provider/profile",
      element: <ProviderPage />,
    },

  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
