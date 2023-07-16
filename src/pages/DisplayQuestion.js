import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import "./CSS/DisplayQuestion.css";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import upvote from "../images/sort-up.svg";
import downvote from "../images/sort-down.svg";
import moment from "moment";
import Avatar from "../components/Avatar";

function DisplayQuestion() {
  const params = useParams();
  const questionsList = [
    {
      _id: 1,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: [
        "java",
        "node js",
        "react js",
        "mongo db",
        "express js",
        "java",
      ],
      userPosted: "mano",
      userId: 1,
      askedOn: "july 1 2023",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2 2023",
          userId: 2,
        },
        {
          answerBody: "Answer 2",
          userAnswered: "kumar",
          answeredOn: "jan 2 2023",
          userId: 2,
        },
      ],
    },
    {
      _id: 2,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 1,
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

  return (
    <div className="containerHome mt-5 row">
      <div className="leftsidebarHome col-2">
        <LeftSideBar page="Questions" />
      </div>
      <div className="mainrightbarHome  col-8">
        <RightSideBar />
        <div className="DisplayQuestionMainDiv mt-4 ms-3">
          <div className="DisplayQuestionDiv">
            {questionsList
              .filter((question) => question._id === +params.id)
              .map((question) => (
                <div key={question._id}>
                  <h3>{question.questionTitle}</h3>
                  <div className="row mt-3">
                    <div className="question-votes col-1">
                      <img
                        src={upvote}
                        alt=""
                        width="18"
                        className="votes-icon"
                      />
                      <p className="mb-0 ms-1">
                        {question.upVotes - question.downVotes}
                      </p>
                      <img
                        src={downvote}
                        alt=""
                        width="18"
                        className="votes-icon"
                      />
                    </div>
                    <div className="col-10">
                      <p>{question.questionBody}</p>
                      <div className="displaytagsDiv mt-1">
                        <div className="displaytags ">
                          {question.questionTags.map((tag) => (
                            <p
                              className="displaytagsQuetions me-1 px-2"
                              key={tag}
                            >
                              {tag}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="askedOnmoment me-0 row">
                    <p className="col-12 pe-0">
                      asked {moment(question.askedOn).fromNow()}
                    </p>
                    <div className="col-3">
                      <Avatar
                        backgroundColor="orange"
                        px="6px"
                        py="3px"
                        borderRadius="4px"
                      >
                        {question.userPosted.charAt(0).toUpperCase()}
                      </Avatar>
                    </div>
                    <div className="col-6 px-0 userPosted mb-3">
                      {question.userPosted}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="DisplayQuestionAnwserDiv">
            {questionsList.noOfAnswers !== 0 && (
              <div>
                <h3>{questionsList[0].noOfAnswers} Answers</h3>
                {questionsList[0].answer.map((answers) => (
                  <div>
                    <p className="mt-4">{answers.answerBody}</p>
                    <div className="askedOnmoment me-0 row">
                      <p className="col-12 pe-0">
                        asked {moment(answers.answeredOn).fromNow()}
                      </p>
                      <div className="col-3">
                        <Avatar
                          backgroundColor="orange"
                          px="6px"
                          py="3px"
                          borderRadius="4px"
                        >
                          {answers.userAnswered.charAt(0).toUpperCase()}
                        </Avatar>
                      </div>
                      <div className="col-6 px-0 userPosted mb-3">
                        {answers.userAnswered}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="YourAnswer mt-3">
            <h4>Your Answer</h4>
            <textarea className="mt-2 mb-2" rows={10} cols={90} />
            <button className="btn btn-primary mb-2">Post Your Answer</button>
            <br/>
            <Link to="/question/ask" className="text-decoration-none "> ask your own question.</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayQuestion;
