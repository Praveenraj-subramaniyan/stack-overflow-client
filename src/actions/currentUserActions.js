import Cookies from "js-cookie";
const cookieValue = Cookies.get("Profile");
const userValue = cookieValue ? JSON.parse(cookieValue) : null;
export const currentUserActions = () => async (dispatch) => {
  try {
    dispatch({ type: "CURRENT_USER", data:userValue });
  } catch (error) {
    console.log(error);
  }
};
