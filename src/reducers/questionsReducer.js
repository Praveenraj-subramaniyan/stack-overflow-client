const questionsReducer = (state = { data: null }, action) => {
    switch (action.type) {
      case "POSTANSWER":
        return { ...state };
      case "GetAllQuestions":
        return { ...state, data: action.data };
      default:
        return state;
    }
  };
  export default questionsReducer;