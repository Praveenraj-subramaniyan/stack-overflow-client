import { GetAllUsersApi } from "../api";

export const GetAllUsers = () => async (dispatch) => {
    try {
      const  reponse  = await GetAllUsersApi();
      dispatch({ type: "GetUsers", data: reponse });
    } catch (error) {
      console.log(error);
    }
  };
  
//   export const UpdateProfile = (id, updateData) => async (dispatch) => {
//     try {
//       const { data } = await api.updateProfile(id, updateData);
//       dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
  