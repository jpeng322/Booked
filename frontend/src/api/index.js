import axios from "axios";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

export const fetchLogin = async (email, password) => {
  try {
    const apiLoginData = await axios.post(
      `http://localhost:${import.meta.env.VITE_PORT}/auth/login/client`,
      {
        email: email,
        password: password,
      }
    );

    // console.log(apiLoginData);

    if (apiLoginData.status == 200 && apiLoginData.data.token) {
      localStorage.setItem("token", apiLoginData.data.token);
      localStorage.setItem("userType", apiLoginData.data.type);
    }

    return apiLoginData;
  } catch (error) {
    return error;
  }
};

export const fetchProviderLogin = async (email, password) => {
  try {
    const apiLoginData = await axios.post(
      `http://localhost:${import.meta.env.VITE_PORT}/auth/login/provider`,
      {
        email: email,
        password: password,
      }
    );

    console.log(apiLoginData);

    if (apiLoginData.status == 200 && apiLoginData.data.token) {
      localStorage.setItem("token", apiLoginData.data.token);
      localStorage.setItem("userType", apiLoginData.data.type);
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
  phoneNumber,
  preferredServices
) => {
  // console.log(email, password, firstName, lastName, phoneNumber)
  try {
    const apiSignupData = await axios.post(
      `http://localhost:${import.meta.env.VITE_PORT}/auth/signup/client`,
      {
        email: email,
        password: password,
        fname: firstName,
        lname: lastName,
        phone: phoneNumber,
        services: preferredServices,
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

export const getProviderBookings = async (id) => {
  console.log(id, "PROVIDERID")
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:${import.meta.env.VITE_PORT}/booking/provider/${id}`,
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
  console.log(id, "PROVIDERID")
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:${
        import.meta.env.VITE_PORT
      }/provider/providers/${id}`,
    });

    if (response) {
      console.log(response);
      const data = response.data.provider;
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const applyOnboarding = async (values) => {
  console.log(values)
  try {
    const token = localStorage.getItem("token");
    const newFormData = new FormData();
    console.log(values.paymentMethods[0], "API VALUESVALUES")

    newFormData.append("firstName", values.firstName);
    newFormData.append("lastName", values.lastName);
    newFormData.append("listOfServices", JSON.stringify(values.listOfServices));
    newFormData.append("paymentMethods", values.paymentMethods);
    newFormData.append("responseTime", values.responseTime);
    newFormData.append("amountOfEmployees", values.amountOfEmployees);
    newFormData.append("backgroundCertified", values.backgroundCertified);
    // newFormData.append("profile", values.profilePicture[0]);

   
    const resp = await axios.put(
      `http://localhost:${import.meta.env.VITE_PORT}/provider/onboard`,
      newFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(resp)

    if (resp.status == 200) {
      return resp.data; 
  
    }
  } catch (e) {
    console.log(e);
    return {};
  }
};
