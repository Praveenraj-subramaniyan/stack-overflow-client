import React from "react";
import "./CSS/AskQuestion.css";

function AskQuestion() {
  return (
    <div className="AskQuestion pt-5 ps-5 ">
      <h3 className="pt-4">Ask a public Question</h3>
      <div className="AskQuestionFormDiv bg-white mt-5 pt-3 ps-3 me-5 pb-4">
        <p className="mb-0">
          <b>Title</b>
        </p>
        <p className="small mb-0">
          Be specific and imagine you’re asking a question to another person
        </p>
        <input placeholder="e.g. Is there an R function for finding the index of an element in a vector?" />
        <br />
        <br />
        <p className="mb-0">
          <b>Body</b>
        </p>
        <p className="small mb-0">
          Include all the information someone would need to answer your question
        </p>
        <textarea rows={10} cols={148} />
        <br />
        <br />
        <p className="mb-0">
          <b>Tags</b>
        </p>
        <p className="small mb-0">
        Add up to 5 tags to describe what your question is about
        </p>
        <input placeholder="e.g. (xml typescript wordpress)" />
      </div>
      <button className="btn btn-primary my-5 ms-3">Reivew your question</button>
    </div>
  );
}

export default AskQuestion;
