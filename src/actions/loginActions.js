import { LoginAPI } from "../api";

export const loginAction = (authData) => async (dispatch) => {
  try {
    const data = await LoginAPI(authData);
    dispatch({ type: "LOGIN", data });
  } catch (error) {
    console.log(error);
  }
};
