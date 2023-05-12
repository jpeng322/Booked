import axios from "axios";

export const fetchLogin = async (email, password) => {
    try {
        const apiLoginData = await axios.post(`http://localhost:${import.meta.env.VITE_PORT}/auth/login`, {
            email: email,
            password: password,
        });

        // console.log(apiLoginData);

        if (apiLoginData.status == 200 && apiLoginData.data.token) {
            localStorage.setItem("token", apiLoginData.data.token);
        }

        return apiLoginData;

    } catch (error) {
        return error;
    }

};

export const fetchSignup = async (email, password, firstName, lastName, phoneNumber) => {
    console.log(email, password, firstName, lastName, phoneNumber)
    try {
        const apiSignupData = await axios.post(`http://localhost:${import.meta.env.VITE_PORT}/auth/signup`, {
            email: email,
            password: password,
            fname: firstName,
            lname: lastName,
            phone: phoneNumber,
        });

        return apiSignupData;

    } catch (error) {
        return error;
    }
}