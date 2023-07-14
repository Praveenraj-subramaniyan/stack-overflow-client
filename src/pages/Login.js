import React, { useState } from "react";
import logo from "../images/icon.png";
import { Link } from "react-router-dom";
import "./CSS/Login.css";
function Login() {
  const [loginData, setloginData] = useState({
    emailIdLogin: "",
    passwordLogin: "",
  });
  function HandleLoginData(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setloginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setisVisible] = useState({
    status: "visually-hidden",
    message: "null",
  });
  return (
    <div className="mainLoginDiv">
      <div className="container mt-5">
        <img className="loginLogo" src={logo} alt="Logo" />
        <div className="loginBoxDiv">
          <form className="bg-white loginForm">
            {/* onSubmit={HandleLoginSubmit} */}
            <div className=" ms-4">
              <label className="mt-4 labelFont">Email</label>
              <br />
              <input
                className=" mt-1 logsignwidth"
                type="email"
                onChange={HandleLoginData}
                name="emailIdLogin"
                id="emailid"
                value={loginData.emailIdLogin}
                required
              />
              <br />
              <label className="labelFont mt-3">Password</label>
              <Link
                to="/forgetpassword"
                className="forgrtpasswordlink text-decoration-none"
              >
                Forget password?
              </Link>
              <br />
              <input
                className=" mt-1 logsignwidth"
                type="password"
                onChange={HandleLoginData}
                name="passwordLogin"
                value={loginData.passwordLogin}
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
              <button
                className="btn btn-primary mt-3 mb-5 pt-1 pb-2 logsignwidth"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <p className="signupLink">
          Don’t have an account?
          <Link className="text-decoration-none" to={`/signin`}> Sign up</Link>
        </p>
        </div>
        {isLoading && (
          <div className="isLoadingLogin">
            <div className="spinner-border  "></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
