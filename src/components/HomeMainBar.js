import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./CSS/HomeMainBar.css";
import QuestionList from "../components/QuestionList"

function HomeMainBar() {
  const questionsList= [
    {
      _id: 1,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo db", "express js","java", "node js", "react js", "mongo db", "express js","java", "node js", "react js", "mongo db",],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: 2,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "jan 1",
      userId: 1,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: 3,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "jan 1",
      userId: 1,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
  ];

  const location =useLocation();

  return (
    <div className="HomeMainBarDiv mt-4 ">
      <div className="row ms-3">
        <h1 className="col-10">{location.pathname === '/' ? "Top Questions" : "All Questions"}</h1>
        <Link to="/askquestion" className="btn btn-primary mt-3 mb-1 col-2 py-1" >Ask Questions</Link>
      </div>
      <div className="mt-4">
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <p className="ms-3">{questionsList.length} questions</p>
            <QuestionList questionsList={questionsList} />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeMainBar;
