import { useState } from "react";

import About from "../src/pages/About";
import "/src/App.css";
import ProviderCard from "./pages/ProviderCard";
import providers from "./providers";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LoginClient from "./pages/LoginClient";
import OnboardingSurvey from "./pages/OnboardingSurvey";
import Recommendations from "./pages/Recommendations";
import Profile from "./pages/Profile";
import CustomerAcc from "./pages/CustomerBookings";
import ProviderBookings from "./pages/ProviderBookings";
import { submitRequestForm } from "./pages/ProviderPage";
import CustomerAccountContact from "./pages/CustomerAccountContact";
import ProviderPage from "./pages/ProviderPage";
import AccountSettings from "./pages/AccountSettings";

//loaders
import {
  fetchLogin,
  fetchSignup,
  getBooking,
  getProviderBookings,
  getCoords
} from "./api";


import NavComp from "./components/Navbar";
import HeroComp from "./components/HeroComp";

import ConfirmationPage from "./components/ConfirmationPage";
import FavoriteProviders from "./components/FavoritesComp";
import MyProfile from "./components/AccountSettings/MyProfile";
import Notifications from "./components/AccountSettings/Notifications";
import DeleteAccount from "./components/AccountSettings/DeleteAccount";
import Wallet from "./components/AccountSettings/Wallet";
import SignOut from "./components/AccountSettings/SignOut";
import MapMarker from "./components/MapMarker";


function App() {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState();
  console.log(formData);

  async function checkout() {
    try {
      const response = await axios({
        method: "post",
        url: `http://localhost:${import.meta.env.VITE_PORT}/payment`,
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
      path: "provierlogin",
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
      element: <Profile providers={providers} />,
    },
    {
      path: "/customer/bookings",
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
      element: <ProviderPage setFormData={setFormData} />,
      action: submitRequestForm,
    },
    {
      path: "/provider/bookings",
      element: <ProviderBookings />,
      loader: getProviderBookings,
    },
    {
      path: "/customer/confirmation/:booking_id",
      loader: ({ params }) => {
        const booking_id = params.booking_id;
        return getBooking(booking_id);
      },
      element: <ConfirmationPage />,
    },
    {
      path: "/settings",
      element: <AccountSettings />,
      children: [
        {
          path: "myprofile",
          element: <MyProfile />,
        },
        {
          path: "notifications",
          element: <Notifications />,
        },
        {
          path: "signout",
          element: <SignOut />,
        },
        {
          path: "delete_account",
          element: <DeleteAccount />,
        },
        {
          path: "wallet",
          element: <Wallet />,
        },
      ],
    },
    {
      path: "map/:address_id",
      loader: ({ params }) => {
        const address_id = params.address_id;
        return getCoords(address_id);
      },
      element: <MapMarker />,
    },
  ]);
  return (
    <div className="App">
      {/* <script src={`${import.meta.env.VITE_GOOGLE_URL}`}></script> */}
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
