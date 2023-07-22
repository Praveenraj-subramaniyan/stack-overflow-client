import React, {useEffect} from "react";
import "./CSS/Header.css";
import logo from "../images/logo.png";
import searchIcon from "../images/search-solid.svg";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useDispatch, useSelector } from "react-redux";
import { currentUserActions } from "../actions/currentUserActions";

function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserActions());
  }, [dispatch]);
  let currentUser = useSelector((state) => state.currentUserReducer);
  return (
    <nav className="navbar navbar-expand-sm bg-light headerbar fixed-top py-1">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <Link
            to="/"
            className="nav-item nav-btn  navbar-brand ms-5 headerLogo"
          >
            <li className="nav-item">
              <img src={logo} alt="logo" />
            </li>
          </Link>
          <li className="nav-item headernavLink">
            <a className="nav-link me-3" href="#">
              About
            </a>
          </li>
          <li className="nav-item headernavLink">
            <a className="nav-link me-3" href="#">
              Products
            </a>
          </li>
          <li className="nav-item searchIconHeader">
            <img src={searchIcon} alt="logo" className="" />
          </li>
          <li className="nav-item searchBarHeader">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
            />
          </li>
        </ul>
        {currentUser === null ? (
          <form className="d-flex me-3 headerFormButton">
            <Link to="/login">
              <button className="btn ms-3  loginbtn">Log in</button>
            </Link>
            <Link to="/signin">
              <button className="btn btn-primary ms-2 me-3 signinbtn">
                Sign in
              </button>
            </Link>
          </form>
        ) : (
          <form className="d-flex me-5 headerFormButton">
            <Link
              to={`/user/details/${currentUser?.id}`}
              className="text-decoration-none"
            >
              <Avatar
                backgroundColor="#009dff"
                px="14px"
                py="7px"
                borderRadius="10%"
                color="white"
              >
                {currentUser?.name[0]}
              </Avatar>
            </Link>
            <button className="btn btn-primary ms-2 me-3 loginbtn">
              Log out
            </button>
          </form>
        )}
      </div>
    </nav>
  );
}

export default Header;
