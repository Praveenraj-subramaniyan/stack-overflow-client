import React from "react";
import { Link } from "react-router-dom";
import Globe from "../images/Globe.svg";
import "./CSS/LeftSideBar.css";

function LeftSideBar() {
  return (
    <div className="leftsideNavBar ms-2">
      <nav className="navbar navbar-expand-sm bg-white">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#leftsideHomeNavBar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="leftsideHomeNavBar">
            <ul className="navbar-nav flex-column">
              <li className="nav-item small">
                <Link className="nav-link">Home</Link>
              </li>
              <li className="nav-item small">
                <Link className="nav-link">Public</Link>
              </li>
              <li className="nav-item small ms-3">
                <Link className="nav-link ">
                  <img src={Globe} alt="Globe" /> Questions
                </Link>
              </li>
              <li className="nav-item small ms-3">
                <Link className="nav-link">Tags</Link>
              </li>
              <li className="nav-item small ms-3">
                <Link className="nav-link">Users</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LeftSideBar;
