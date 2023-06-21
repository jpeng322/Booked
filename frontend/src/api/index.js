import axios from "axios";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

export const getCustomerName = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_PORT}/client/client/${id}`
    );

    if (response) {
      const { client_fname, client_lname, client_email } = response.data.client;
      const customerInfo = {
        fname: client_fname,
        lname: client_lname,
        email: client_email,
      };
      return customerInfo;
    }
  } catch (error) {
    return error;
  }
};

export const getCustomerInfo = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_PORT}/client/client/${id}`
    );

    if (response) {
      // const { client_fname, client_lname, client_email } = response.data.client;
      // const customerInfo = {
      //   fname: client_fname,
      //   lname: client_lname,
      //   email: client_email,
      // };
      const customerInfo = response.data.client
      return customerInfo;
    }
  } catch (error) {
    return error;
  }
};

export const fetchLogin = async (email, password) => {
  try {
    const apiLoginData = await axios.post(
      `${import.meta.env.VITE_PORT}/auth/login/client`,
      {
        email: email,
        password: password,
      }
    );

    if (apiLoginData.status == 200 && apiLoginData.data.token) {
      localStorage.setItem("token", apiLoginData.data.token);
      localStorage.setItem("userType", apiLoginData.data.type);
      localStorage.setItem("userId", apiLoginData.data.findClient.client_id);
    }

    return apiLoginData;
  } catch (error) {
    return error;
  }
};

export const fetchLoginProvider = async (email, password) => {
  try {
    const apiLoginData = await axios.post(
      `${import.meta.env.VITE_PORT}/auth/login/provider`,
      {
        email: email,
        password: password,
      }
    );

    if (apiLoginData.status == 200 && apiLoginData.data.token) {
      localStorage.setItem("token", apiLoginData.data.token);
      localStorage.setItem("userType", apiLoginData.data.type);
      localStorage.setItem(
        "userId",
        apiLoginData.data.findProvider.provider_id
      );
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
  preferredServices,
  zipCode
) => {

  try {
    const apiSignupData = await axios.post(
      `${import.meta.env.VITE_PORT}/auth/signup/client`,
      {
        email: email,
        password: password,
        fname: firstName,
        lname: lastName,
        phone: phoneNumber,
        services: preferredServices,
        zipcode: zipCode
      }
    );

    return apiSignupData;
  } catch (error) {
    console.log(error)
    return error;
  }
};

export const getBooking = async (booking_id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_PORT}/booking/${booking_id}`
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
  // console.log(id, "PROVIDERID")
  try {
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_PORT}/booking/provider/${id}`,
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
export const getCustomerBookings = async (id) => {
  // console.log(id, "PROVIDERID")
  try {
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_PORT}/booking/client/${id}`,
    });

    console.log(response);

    if (response) {
      const customerBookings = response.data.bookings;
      return customerBookings;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getCoords = async (address_id) => {
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

  const providerInfo = await getProviderInfo(localStorage.getItem("userId"))
  const providerAddress = providerInfo.provider_areaServed
  // console.log(providerAddress)
  return { address_id, providerAddress };
  return latLng;
};

export const getOnboardedProviders = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_PORT}/provider/onboarded`,
    });

    if (response) {
      const providers = response.data.onboardedProviders;
      return providers;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getProviderInfo = async (id) => {
  try {
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_PORT}/provider/providers/${id}`,
    });

    if (response) {
      const data = response.data.provider;
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const uploadImageToAxios = async (base64EncodedImage) => {
  console.log(base64EncodedImage);

  try {
    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");

    const postTOAxios = await axios.post(
      `${import.meta.env.VITE_PORT}/profile/pic`,
      { data: base64EncodedImage, type: userType },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(postTOAxios);

    const response = postTOAxios.data;

    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteImageToAxios = async () => {
  try {
    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");

    const deleteToAxios = await axios.put(
      `${import.meta.env.VITE_PORT}/profile/pic/remove`,
      { type: userType },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(deleteToAxios);
    const response = deleteToAxios.data;
    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const editClientAxios = async (
  email,
  firstName,
  lastName,
  phoneNumber,
  zipcode
) => {
  try {
    const token = localStorage.getItem("token");
    // const userType = localStorage.getItem('userType');

    const apiEditClient = await axios.put(
      `${import.meta.env.VITE_PORT}/client/information`,
      {
        client_email: email,
        client_fname: firstName,
        client_lname: lastName,
        client_phone: phoneNumber,
        client_zipcode: zipcode,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(apiEditClient);
    // const response = editClient.data
    // console.log(response);

    return apiEditClient;
  } catch (error) {
    return error;
  }
};

export const getProviderInfoAndServices = async (id) => {
  console.log(id, "PROVIDERID");
  try {
    const providerInfo = await axios({
      method: "get",
      url: `${import.meta.env.VITE_PORT}/provider/providers/${id}`,
    });

    const serviceInfo = await axios({
      method: "get",
      url: `${import.meta.env.VITE_PORT}/service/${id}`,
    });

    const bookingsInfo = await getProviderBookings(id);

    if (providerInfo && serviceInfo) {
      console.log(providerInfo, serviceInfo);
      const data = {
        provider: providerInfo.data.provider,
        services: serviceInfo.data.services,
        timesBooked: bookingsInfo.length,
      };
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const applyOnboarding = async (values, areaAddress) => {
  try {
    const allImagesArray = values.profilePicture.concat(values.serviceImages);
    const token = localStorage.getItem("token");
    const newFormData = new FormData();

    if (allImagesArray) {
      for (let i = 0; i < allImagesArray.length; i++) {
        newFormData.append("profile", allImagesArray[i]);
      }
    }

    newFormData.append("firstName", values.firstName);
    newFormData.append("lastName", values.lastName);
    newFormData.append("listOfServices", JSON.stringify(values.listOfServices));
    newFormData.append("paymentMethods", values.paymentMethods);
    newFormData.append("responseTime", values.responseTime);
    newFormData.append("amountOfEmployees", values.amountOfEmployees);
    newFormData.append("yearsInBusiness", values.yearsInBusiness);
    newFormData.append("backgroundCertified", values.backgroundCertified);
    newFormData.append("businessName", values.businessName);
    newFormData.append("businessType", values.businessType);
    newFormData.append("areaServed", areaAddress.label);

    // newFormData.append("profile", values.profilePicture[0]);

    const resp = await axios.put(
      `${import.meta.env.VITE_PORT}/provider/onboard`,
      newFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(resp);

    if (resp.status == 200) {
      return resp.data;
    }
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const getCustomerRecommendations = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_PORT}/client/client/${id}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response) {
      const customerType = response.data.client.preferred_services;

      try {
        const providersResponse = await axios.get(
          `${
            import.meta.env.VITE_PORT
          }/provider/provider/${customerType.toLowerCase()}`,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(providersResponse)
        const recommendedProviders = providersResponse.data.providers;
        console.log(recommendedProviders);
        return recommendedProviders;
      } catch (e) {}
    }
  } catch (error) {
    return error;
  }
};

