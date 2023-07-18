import { GetQuestionListAPI } from "../api";

export const GetAllQuestions = () => async (disptach) => {
    try {
      const  data  = await GetQuestionListAPI();
      disptach({ type: "GetAllQuestions", data : data });
    } catch (error) {
      console.log(error);
    }
  };