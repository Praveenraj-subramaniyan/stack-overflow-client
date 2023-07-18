import axios from "axios";
import Cookies from "js-cookie";
const API = axios.create({ baseURL: "http://localhost:3000/" });
const cookieValue = Cookies.get("Profile");
const authToken = cookieValue ? JSON.parse(cookieValue) : null;

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

export const AskQuestionAPI = async (questionData) => {
  console.log(questionData);
  try {
    const response = await API.post("/questions/ask", questionData, {
      headers: {
        Authorization: `Bearer ${authToken.token}`,
      },
    });
    return response;
  } catch (error) {
    return "Server Busy";
  }
};

export const GetQuestionListAPI = async () => {
  try {
    const response = await API.get("/questions");
    return response.data;
  } catch (error) {
    return "Server Busy";
  }
};
