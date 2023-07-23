import Cookies from "js-cookie";

const loginReducer = (state = null , action) => {
  switch (action.type) {
    case "Login":
      const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
      Cookies.set("Profile", JSON.stringify(action?.data), {
        expires: expiryDate,
        sameSite: "None",
        secure: true,
      });
      return {...state, data:action?.data}
    case "Logout":
      Cookies.remove("Profile", { sameSite: "None", secure: true });
      return { ...state, data: null };
    default:
      return null;
  }
};

export default loginReducer;
