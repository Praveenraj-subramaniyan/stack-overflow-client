const usersReducer = (states = [], action) => {
    switch (action.type) {
      case "GetUsers":
        return action.data;
      case "UpdateCurrentUser":
        return states.map((state) =>
          state._id === action.payload._id ? action.payload : state
        );
      default:
        return states;
    }
  };
  
  export default usersReducer;