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


export const fetchLoginProvider = async (email, password) => {

  try {
    const apiLoginData = await axios.post(
      `http://localhost:${import.meta.env.VITE_PORT}/auth/login/provider`,
      {
        email: email,
        password: password,
      }
    );

    console.log(apiLoginData, "APILOGINLOGIN");


    if (apiLoginData.status == 200 && apiLoginData.data.token) {
      localStorage.setItem("token", apiLoginData.data.token);
      localStorage.setItem("userType", apiLoginData.data.type);
      localStorage.setItem("userId", apiLoginData.data.findProvider.provider_id )
    }

    return apiLoginData;
  } catch (error) {
    return error;
  }
};



export const fetchSignup = async (email, password, firstName, lastName, phoneNumber, preferredServices) => {
  // console.log(email, password, firstName, lastName, phoneNumber)
  try {
    const apiSignupData = await axios.post(`http://localhost:${import.meta.env.VITE_PORT}/auth/signup/client`, {
      email: email,
      password: password,
      fname: firstName,
      lname: lastName,
      phone: phoneNumber,
      services: preferredServices,
    });


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
  // console.log(id, "PROVIDERID")
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

export const getProviderInfo = async (id) => {
  console.log(id, "PROVIDERIDasdasd")
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:${import.meta.env.VITE_PORT
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



export const uploadImageToAxios = async (base64EncodedImage) => {
  console.log(base64EncodedImage);

  try {
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('userType');

    const postTOAxios = await axios.post(`http://localhost:${import.meta.env.VITE_PORT}/profile/pic`, { data: base64EncodedImage, type: userType }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(postTOAxios);

    const response = postTOAxios.data

    console.log(response);

    return response;

  } catch (error) {
    console.log(error);
  }

};

export const deleteImageToAxios = async () => {
  try {
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('userType');

    const deleteToAxios = await axios.put(`http://localhost:${import.meta.env.VITE_PORT}/profile/pic/remove`, { type: userType }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(deleteToAxios);
    const response = deleteToAxios.data
    console.log(response);

    return response;

  } catch (error) {
    console.log(error);
  }
}


export const editClientAxios = async (email, firstName, lastName, phoneNumber, zipcode,) => {
  try {
    const token = localStorage.getItem('token');
    // const userType = localStorage.getItem('userType');

    const apiEditClient = await axios.put(`http://localhost:${import.meta.env.VITE_PORT}/client/information`, {
      client_email: email,
      client_fname: firstName,
      client_lname: lastName,
      client_phone: phoneNumber,
      client_zipcode: zipcode,

    }, 
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(apiEditClient);
    // const response = editClient.data
    // console.log(response);

    return apiEditClient;

  } catch (error) {
    return error;
  }
}

export const getProviderInfoAndServices = async (id) => {
  console.log(id, "PROVIDERID")
  try {
    const providerInfo = await axios({
      method: "get",
      url: `http://localhost:${
        import.meta.env.VITE_PORT
      }/provider/providers/${id}`,
    });

    const serviceInfo = await axios({
      method: "get",
      url: `http://localhost:${
        import.meta.env.VITE_PORT
      }/service/${id}`,
    })

    const bookingsInfo = await getProviderBookings(id)


    if (providerInfo && serviceInfo) {
     console.log(providerInfo, serviceInfo)
      const data = {
        provider : providerInfo.data.provider,
        services: serviceInfo.data.services,
        timesBooked: bookingsInfo.length,
      }
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const applyOnboarding = async (values, areaAddress) => {
  console.log(values, areaAddress, "APAPAPPAII")
  try {
    const token = localStorage.getItem("token");
    const newFormData = new FormData();

    newFormData.append("firstName", values.firstName);
    newFormData.append("lastName", values.lastName);
    newFormData.append("listOfServices", JSON.stringify(values.listOfServices));
    newFormData.append("paymentMethods", values.paymentMethods);
    newFormData.append("responseTime", values.responseTime);
    newFormData.append("amountOfEmployees", values.amountOfEmployees);
    newFormData.append("yearsInBusiness", values.yearsInBusiness);
    newFormData.append("backgroundCertified", values.backgroundCertified);
    newFormData.append("businessName", values.businessName);
    newFormData.append("areaServed", areaAddress.label)
    // newFormData.append("profile", values.profilePicture[0]);

   
    const resp = await axios.put(
      `http://localhost:${import.meta.env.VITE_PORT}/provider/onboard`,
       newFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
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

