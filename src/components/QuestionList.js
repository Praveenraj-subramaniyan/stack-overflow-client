import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import moment from "moment";
import "./CSS/QuestionList.css";

function QuestionList({ questionsList }) {
  return (
    <div>
      {questionsList.map((question) => (
        <div className="QuestionDiv" key={question._id}>
          <div className="row ms-1 text-secondary mt-2">
            <div className="col-1">
              {/* <p>{question.upVote.length - question.downVote.length}</p> */}
              <p className="text-center">5</p>
              <p>votes</p>
            </div>
            <div className="col-1">
              <p className="text-center">{question.noOfAnswers}</p>
              <p>answers</p>
            </div>
            <div className="col-7 ms-2 pe-0">
              <Link
                to={`/question/details/${question._id}`}
                className="text-decoration-none "
              >
                {question.questionTitle}
              </Link>
              <div className="displaytagsDiv mt-1">
                <div className="displaytags ">
                  {question.questionTags.map((tag) => (
                    <p className="displaytagsQuetions me-1 px-2" key={tag}>{tag}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-2 mt-5 px-0 askedOnuserPosted">
              <p className="small">
                asked {moment(question.askedOn).fromNow()} {question.userPosted}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
