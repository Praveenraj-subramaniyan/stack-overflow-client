import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:3000/" });

export const LoginAPI = async (loginData) => {
  try {
    const response = await API.post("login", loginData);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Server Busy";
  }
};

export const SignUPAPI = async (loginData) => {
  try {
    const response = await API.post("/signin/verify", loginData);
    return response.data;
  } catch (error) {
    console.error(error);
    return "Server Busy";
  }
};
