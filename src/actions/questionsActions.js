import { GetQuestionListAPI, AskQuestionAPI } from "../api";

export const GetAllQuestions = () => async (dispatch) => {
  try {
    const data = await GetQuestionListAPI();
    dispatch({ type: "GetAllQuestions", data: data });
  } catch (error) {
    console.log(error);
  }
};

export const AskQuestionAction = (questionData) => async (dispatch) => {
  try {
    const data = await AskQuestionAPI(questionData);
    dispatch({ type: "PostQuestion", data: data });
    dispatch(GetAllQuestions());
  } catch (error) {
    console.log(error);
  }
};
