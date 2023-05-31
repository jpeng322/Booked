import axios from "axios";

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

<<<<<<< HEAD
export const fetchSignup = async (email, password, firstName, lastName, phoneNumber) => {
    console.log(email, password, firstName, lastName, phoneNumber)
    try {
        const apiSignupData = await axios.post(`http://localhost:${import.meta.env.VITE_PORT}/auth/signup`, {
            email: email,
            password: password,
            fname: firstName,
            lname: lastName,
            number: phoneNumber,
        });
=======
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
        phone: phoneNumber,
      }
    );
>>>>>>> f54b4c581052d3a976efa0f55490c293bf84bfcf

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
        const booking = response.data.booking
        return booking
    }
  } catch (e) {
    console.log(e);
  }
};

export const getProviderBookings = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:${
        import.meta.env.VITE_PORT
      }/booking/provider/1`,
    });

    console.log(response);

    if (response) {
      const providerBookings = response.data.bookings
      return providerBookings
    }
  } catch (e) {
    console.log(e);
  }
}