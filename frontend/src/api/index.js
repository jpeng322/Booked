import axios from "axios";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

export const fetchLogin = async (email, password) => {
  try {
    const apiLoginData = await axios.post(
      `http://localhost:${import.meta.env.VITE_PORT}/auth/login`,
      {
        email: email,
        password: password,
      }
    );

    // console.log(apiLoginData);

    if (apiLoginData.status == 200 && apiLoginData.data.token) {
      localStorage.setItem("token", apiLoginData.data.token);
    }

    return apiLoginData;
  } catch (error) {
    return error;
  }
};

export const fetchSignup = async (
  email,
  password,
  firstName,
  lastName,
  phoneNumber
) => {
  console.log(email, password, firstName, lastName, phoneNumber);
  try {
    const apiSignupData = await axios.post(
      `http://localhost:${import.meta.env.VITE_PORT}/auth/signup`,
      {
        email: email,
        password: password,
        fname: firstName,
        lname: lastName,
        number: phoneNumber,
      }
    );

    return apiSignupData;
  } catch (error) {
    return error;
  }
};

export const getBooking = async (booking_id) => {
  try {
    const response = await axios.get(
      `http://localhost:${import.meta.env.VITE_PORT}/booking/${booking_id}`
    );

    if (response) {
      console.log(response);
      const booking = response.data.booking;
      return booking;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getProviderBookings = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:${import.meta.env.VITE_PORT}/booking/provider/1`,
    });

    console.log(response);

    if (response) {
      const providerBookings = response.data.bookings;
      return providerBookings;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getCoords = (address_id) => {
  // let latLng;
  // geocodeByPlaceId(address_id)
  //   //  .then((results) => console.log(results))
  //   // .then((results) => console.log(results))
  //   .then((results) => getLatLng(results[0]))
  //   .then(({ lat, lng }) => {
  //     latLng = { lag, lng };
  //     // setCode({ lat, lng });
  //     console.log("Successfully got latitude and longitude", { lat, lng });
  //     // return { lat, lng };
  //   })
  //   .catch((error) => console.error(error));
  return address_id;
  return latLng;
};

export const getProviderInfo = async (id = 6) => {
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:${
        import.meta.env.VITE_PORT
      }/provider/providers/${id}`,
    });

    if (response) {
      console.log(response);
      const data = response.data.provider
      return data
    }
  } catch (e) {
    console.log(e);
  }
};
