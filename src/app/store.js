import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../reducers/loginReducer";
import currentUserReducer from "../reducers/currentUserReducer";
// import questionsReducer from "./questions";
// import usersReducer from "./users";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  currentUserReducer: currentUserReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  currentUserReducer,
  middleware: [thunk],
});
