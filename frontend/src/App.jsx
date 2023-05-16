import { useState } from "react";


import About from "../src/pages/About"
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
import OnboardingSurvey from "./pages/OnboardingSurvey";
import Recommendations from "./pages/Recommendations";
import Profile from "./pages/Profile";
import CustomerAcc from "./pages/CustomerBookings";
import FavoriteProviders from "./components/Favoritess";

import NavComp from "./components/Navbar";
import HeroComp from "./components/HeroComp";

function App() {
  const [count, setCount] = useState(0);

  async function checkout() {
    console.log("asdasd");
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
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
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
      element: <FavoriteProviders />
    }, {
    path: "/provider",
    element: <ProviderCard providers={providers} />},
    {
      path: "/about",
      element: <About />},
    
    ]);
  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
    
  );
  }




export default App;
