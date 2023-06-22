import { useState } from "react";

import About from "../src/pages/About";
import "/src/App.css";
import ProviderCard from "./pages/ProviderCard";
import providers from "./providers";
import providersWithChangedType from "./providersWithChangeType";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createStore, StateMachineProvider } from "little-state-machine";

//pages
import Home from "./pages/Home";
import CustomerSignup from "./pages/CustomerSignup";
import ProviderLogin from "./pages/ProviderLogin";
import CustomerLogin from "./pages/CustomerLogin";
import OnboardingSurvey from "./pages/OnboardingSurvey";
import Recommendations from "./pages/Recommendations";
import Profile from "./pages/Profile";
import CustomerAcc from "./pages/CustomerBookings";
import ProviderBookings from "./pages/ProviderBookings";
import { submitRequestForm } from "./pages/ProviderPage";
import { submitEditForm } from "./components/EditProfileModal";
import CustomerAccountContact from "./pages/CustomerAccountContact";
import ProviderPage from "./pages/ProviderPage";
import AccountSettings from "./pages/AccountSettings";
import ProviderOnboarding from "./pages/Onboarding";

//loaders
import {
  fetchLogin,
  fetchLoginProvider,
  fetchSignup,
  getBooking,
  getProviderBookings,
  getCoords,
  getProviderInfo,
  editClientAxios,
  // fetchProviderLogin,
  getProviderInfoAndServices,
  getOnboardedProviders,
  getCustomerBookings,
  getCustomerInfo
} from "./api";

import NavComp from "./components/Navbar";
import HeroComp from "./components/HeroComp";
import ConfirmationPage from "./components/ConfirmationPage";
import FavoriteProviders from "./components/CustomerCarousel";
import MyProfile from "./components/AccountSettings/MyProfile";
import Notifications from "./components/AccountSettings/Notifications";
import DeleteAccount from "./components/AccountSettings/DeleteAccount";
import Wallet from "./components/AccountSettings/Wallet";
import SignOut from "./components/AccountSettings/SignOut";
import MapMarker from "./components/MapMarker";
import Main from "./template/Main";
import ProviderAccountHero from "./pages/ProviderAccountHero";
import CustomerOnboarding from "./pages/CustomerOnboarding";
import { ProviderType } from "./components/ProviderTypeComp";

function App() {
  const [count, setCount] = useState(0);
  // const [formData, setFormData] = useState();
  // console.log(formData);

  createStore({});

  async function checkout() {
    try {
      const response = await axios({
        method: "post",
        url: `${import.meta.env.VITE_PORT}/payment`,
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
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
          id: "home",
          loader: () => {
            return getOnboardedProviders()
          }
        },
        {
          path: "provider/settings/:id",
          element: <AccountSettings />,
          children: [
            {
              path: "myprofile",
              // path: "myprofile/:provider_id",
              element: <MyProfile />,
              action: submitEditForm,
              loader: () => {
                // const provider_id = params.provider_id;
                return getProviderInfo(localStorage.getItem("userId"));
              },
              // loader: ({ params }) => {
              //   const provider_id = params.provider_id;
              //   return getProviderInfo(provider_id);
              // },
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
          path: "/providers",
          children: [
            // {
            //   path: "/provider",
            //   // element: <ProviderCard providers={providers} />,
            //   element: <ProviderCard providers={providers} />,
            //   loader: getOnboardedProviders,
            // },
            {
              path: "all",
              element: <ProviderType type="all" />,
              loader: getOnboardedProviders,
            },

            {
              path: "home_improvement",
              element: <ProviderType type="home improvement" />,
              loader: getOnboardedProviders,
            },
            {
              path: "landscaping",
              element: <ProviderType type="landscaping" />,
              loader: getOnboardedProviders,
            },
            {
              path: "automotive",
              element: <ProviderType type="automotive" />,
              loader: getOnboardedProviders,
            },
            {
              path: "personal_care",
              element: <ProviderType type="personal care" />,
              loader: getOnboardedProviders,
            },
            {
              path: "pet_care",
              element: <ProviderType type="pet care" />,
              loader: getOnboardedProviders,
            },
            {
              path: "designer_artist",
              element: <ProviderType type="designer & artist" />,
              loader: getOnboardedProviders,
            },
            {
              path: "events",
              element: <ProviderType type="events" />,
              loader: getOnboardedProviders,
            },
            {
              path: "technology",
              element: <ProviderType type="technology" />,
              loader: getOnboardedProviders,
            },
          ],
        },
        {
          path: "/customer/bookings/:id",
          element: <CustomerAcc />,
          loader: ({ params }) => {
            console.log(params);
            const id = params.id;
            return getCustomerBookings(id);
          },
        },
        {
          path: "/provider/bookings/:id",
          element: <ProviderBookings />,

          loader: ({ params }) => {
            console.log(params);
            const id = params.id;
            return getProviderBookings(id);
          },
        },
        // {
        //   path: "/customer/login",
        //   element: <CustomerLogin />,
        //   action: async ({ request }) => {
        //     try {
        //       const formData = await request.formData();
        //       const email = formData.get("email");
        //       const password = formData.get("password");
        //       return await fetchLogin(email, password);
        //     } catch (error) {
        //       return error;
        //     }
        //   },
        // },
        {
          path: "/customer/signup",
          element: <CustomerSignup />,
        },
        {
          path: "/provider/signup",
          element: <ProviderAccountHero />,
        },
        {
          path: "/customer/login",
          element: <CustomerLogin />,
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
          path: "/customer/signup",
          element: <CustomerSignup />,
        },
        {
          path: "onboarding/:id",
          element: <ProviderOnboarding />,
        },
        {
          path: "/customer/onboarding",
          element: <CustomerOnboarding />,
          action: async ({ request }) => {
            try {
              const formData = Object.fromEntries(await request.formData());
              const {
                email,
                password,
                firstName,
                lastName,
                phoneNumber,
                preferredServices,
                zipCode
              } = formData;
              return await fetchSignup(
                email,
                password,
                firstName,
                lastName,
                phoneNumber,
                preferredServices,
                zipCode
              );
            } catch (error) {
              return error;
            }
          },
        },
        {
          path: "/customer/onboarding",
          element: <CustomerOnboarding />,
          action: async ({ request }) => {
            try {
              const formData = Object.fromEntries(await request.formData());
              const {
                email,
                password,
                firstName,
                lastName,
                phoneNumber,
                preferredServices,
              } = formData;
              // console.log(
              //   email,
              //   password,
              //   firstName,
              //   lastName,
              //   phoneNumber,
              //   preferredServices
              // );
              return await fetchSignup(
                email,
                password,
                firstName,
                lastName,
                phoneNumber,
                preferredServices
              );
            } catch (error) {
              return error;
            }
          },
        },
        {
          path: "/provider/login",
          element: <ProviderLogin />,
          action: async ({ request }) => {
            try {
              const formData = await request.formData();
              const email = formData.get("email");
              const password = formData.get("password");
              return await fetchLoginProvider(email, password);
            } catch (error) {
              return error;
            }
          },
        },
        {
          path: "/provider",
          // element: <ProviderCard providers={providers} />,
          element: <ProviderType type="all" />,
          loader: getOnboardedProviders,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/provider/profile/:id",
          element: <ProviderPage />,
          action: submitRequestForm,
          loader: ({ params }) => {
            let id = params.id;
            return getProviderInfoAndServices(id);
          },
        },
        {
          path: "/customer/account/:id",
          element: <CustomerAccountContact />,
          loader: ({ params }) => {
            let id = params.id;
            return getCustomerInfo(id);
          },
          action: async ({ request }) => {
            try {
              const formData = Object.fromEntries(await request.formData());
              // console.log(formData)
              const { email, firstName, lastName, phoneNumber, zipcode } =
                formData;
              // console.log(
              //   email,
              //   firstName,
              //   lastName,
              //   phoneNumber,
              //   zipcode,
              //   );
              return await editClientAxios(
                email,
                firstName,
                lastName,
                phoneNumber,
                zipcode
              );
            } catch (error) {
              return error;
            }
          },
        },
        {
          path: "/customer/confirmation/:booking_id",
          loader: ({ params }) => {
            const booking_id = params.booking_id;
            return getBooking(booking_id);
          },
          element: <ConfirmationPage />,
        },
      ],
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
    // {
    //   path: "/customer/bookings",
    //   element: <CustomerAcc />,
    // },
    {
      path: "/carousel",
      element: <FavoriteProviders />,
    },

    // {
    //   path: "/provider/bookings",
    //   element: <ProviderBookings />,
    //   loader: getProviderBookings,
    // },
   

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
    <StateMachineProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </StateMachineProvider>
  );
}

export default App;
