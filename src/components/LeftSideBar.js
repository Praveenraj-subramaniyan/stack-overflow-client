import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Globe from "../images/Globe.svg";
import "./CSS/LeftSideBar.css";

function LeftSideBar() {
  const [buttonClick, setbuttonClick] = useState("Home");

  return (
    <div className="leftsideNavBar ms-2">
      <nav className="navbar navbar-expand-sm bg-white">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="leftsideHomeNavBar">
            <ul className="navbar-nav flex-column mt-3">
              <li
                className={`${
                  buttonClick === "Home" ? "activeleftsideBarBtn" : ""
                } nav-item small py-1 mt-1`}
                onClick={() => setbuttonClick("Home")}
              >
                <NavLink
                  to="/"
                  className={` text-decoration-none text-dark px-2`}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item small mt-2 ">
                <NavLink className="nav-link text-secondary">Public</NavLink>
              </li>
              <li
                className={`${
                  buttonClick === "Questions" ? "activeleftsideBarBtn" : ""
                } nav-item small ms-3 mt-2 `}
                onClick={() => setbuttonClick("Questions")}
              >
                <NavLink className="nav-link" to="/questions">
                  <img
                    src={Globe}
                    alt="Globe"
                    className="mb-1 text-secondary"
                  />
                  <span className="text-secondary">Questions</span>
                </NavLink>
              </li>
              <li
                className={`${
                  buttonClick === "Tags" ? "activeleftsideBarBtn" : ""
                } nav-item small ms-3 mt-2`}
                onClick={() => setbuttonClick("Tags")}
              >
                <NavLink to="/tags" className="nav-link text-secondary">
                  Tags
                </NavLink>
              </li>
              <li
                className={`${
                  buttonClick === "Users" ? "activeleftsideBarBtn" : ""
                } nav-item small ms-3 mt-2`}
                onClick={() => setbuttonClick("Users")}
              >
                <NavLink to="/users" className="nav-link text-secondary">
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LeftSideBar;
