import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Questions from "./pages/Questions";
import AskQuestion from "./pages/AskQuestion";
import DisplayQuestion from "./pages/DisplayQuestion";

function Routing() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/question/ask" element={<AskQuestion />} />
        <Route path="/question/details/:id" element={<DisplayQuestion />} />
      </Routes>
  );
}

export default Routing;
