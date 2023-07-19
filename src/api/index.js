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

export const PostAnswerAPI = async (answer) => {
  try {
    const response = await API.post("/answer/new/"+answer.id, answer, {
      headers: {
        Authorization: `Bearer ${authToken.token}`,
      },
    });
    return response;
  } catch (error) {
    return "Server Busy";
  }
};

export const deleteQuestionAPI = async (id) => {
  try {
    const response = await API.delete("/questions/delete/"+id, {
      headers: {
        Authorization: `Bearer ${authToken.token}`,
      },
    });
    console.log('deleteQuestionAPI',response)
    return response;
  } catch (error) {
    return "Server Busy";
  }
};
