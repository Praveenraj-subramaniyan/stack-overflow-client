import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Questions from "./pages/Questions";
import AskQuestion from "./pages/AskQuestion";

function Routing() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/askquestion" element={<AskQuestion />} />
      </Routes>
  );
}

export default Routing;
