import { GetQuestionListAPI, AskQuestionAPI, PostAnswerAPI, deleteQuestionAPI } from "../api";

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
    console.log("AskQuestionAPI",data)
    return "true";
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuestion = (id) => async (dispatch) => {
  try {
    const reponse = await deleteQuestionAPI(id);
    dispatch(GetAllQuestions());
    console.log("deleteQuestion",reponse)
    return reponse;
  } catch (error) {
    console.log(error);
  }
};

export const PostAnswer = (answer) => async (dispatch) => {
  try {
    const  data  = await PostAnswerAPI(answer);
    dispatch({ type: "PostAnswer", data: data });
    dispatch(GetAllQuestions());
  } catch (error) {
    console.log(error);
  }
};
