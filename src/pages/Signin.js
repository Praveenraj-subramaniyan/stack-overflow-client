import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logosignin from "../images/icon.png";
import "./CSS/Signin.css";

function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const [signupData, setsignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  function HandleSignUpData(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setsignupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const [isVisible, setisVisible] = useState({
    status: "visually-hidden",
    message: "null",
  });
  return (
    <div className=" row mt-5 signinDiv">
      <div className="col-6 paraSignin">
        <h5>Join the Stack Overflow community</h5>
        <p>Get unstuck — ask a question</p>
        <p>Unlock new privileges like voting and commenting</p>
        <p>Save your favorite tags, filters, and jobs</p>
        <p>Earn reputation and badges</p>
        <p className="text-secondary ">
          Collaborate and share knowledge with a private group for
        </p>
        <p className="text-primary">
            Get Stack Overflow for Teams free for up to 50 users.
          </p>
      </div>
      <div className="col-6 mainsigninDiv">
        <div className="SigninBoxDiv ms-2">
        <img className="signinLogo mb-3" src={logosignin} alt="Logo" />
          <form className="bg-white signinForm">
            {/* onSubmit={HandleLoginSubmit} */}
            <div className=" ms-4">
            <label className="mt-4 labelFont">Display Name</label>
              <br />
              <input
                className=" mt-1 logsignwidth"
                type="email"
                onChange={HandleSignUpData}
                name="text"
                id="name"
                value={signupData.name}
                required
              />
              <br />
              <label className="mt-4 labelFont">Email</label>
              <br />
              <input
                className=" mt-1 logsignwidth"
                type="email"
                onChange={HandleSignUpData}
                name="email"
                id="emailid"
                value={signupData.email}
                required
              />
              <br />
              <label className="labelFont mt-3">Password</label>
              <br />
              <input
                className=" mt-1 logsignwidth"
                type="password"
                onChange={HandleSignUpData}
                name="passwordLogin"
                value={signupData.password}
                required
              />
              <label
                htmlFor="emailIdLogin"
                className={
                  isVisible.for === "login"
                    ? isVisible.status
                    : "visually-hidden"
                }
              >
                {isVisible.message}
              </label>
              <p>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
              <button
                className="btn btn-primary mt-3 mb-5 pt-1 pb-2 logsignwidth"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="loginLink">
          Already have an account?
            <Link className="text-decoration-none" to={`/login`}> Log in</Link>
          </p>
        </div>
      </div>
      {isLoading && (
        <div className="isLoadingLogin">
          <div className="spinner-border  "></div>
        </div>
      )}
    </div>
  );
}

export default Signin;
