const currentUserReducer = (state = null, action) => {
    switch (action.type) {
      case "CURRENT_USER":
         return action.data;
      default:
        return state;
    }
  };
  
  export default currentUserReducer;