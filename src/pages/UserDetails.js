import React, { useEffect } from "react";
import LeftSideBar from "../components/LeftSideBar";
import { Link } from "react-router-dom";
import "./CSS/UserDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUsers } from "../actions/usersAction";
import Avatar from "../components/Avatar";
import { useParams } from "react-router";
import moment from "moment";
import "./CSS/UserDetails.css";

function UserDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(GetAllUsers());
  }, [dispatch]);
  const userList = useSelector((state) => state.usersReducer);
  const currentProfile = userList.filter((user) => user._id === id);
  const currentUser = useSelector((state) => state.currentUserReducer);
  if (!currentUser) {
    return <div className="spinner-border mt-5  isLoading"></div>;
  }
  return (
    <div className="containerHome mt-5 row">
      <div className="leftsidebarHome col-2">
        <LeftSideBar page="Users" />
      </div>
      <div className="mainrightbarHome col-12">
        <div className="ms-3 mt-5">
          <button
            className="btn btn-primary  EditProfilebtn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#EditProfile"
          >
            Edit Profile
          </button>
          <div className="row ms-1 mb-5">
            {currentProfile.map((user, index) => (
              <div className="col-3 row p-3 me-2 mb-3 " key={index}>
                <div className="col-3 px-1">
                  <Link
                    to={`/user/details/${user?._id}`}
                    className="text-decoration-none "
                  >
                    <Avatar
                      backgroundColor="#009dff"
                      px="14px"
                      py="5px"
                      borderRadius="5%"
                      color="white" 
                    >
                      {user.name[0]}
                    </Avatar>
                  </Link>
                </div>
                <div className="col-8 px-0">
                  <span>{user.name}</span>
                </div>
                <p className="mt-3 text-secondary">
                  {moment(user?.joinedOn).fromNow()}
                </p>
                {
                  (user.about == "" ? (
                    <div className="mt-1 text-secondary">No bio found</div>
                  ) : (
                    <div className="mt-3">
                       <h6>About</h6>
                      <p>{user.about}</p>
                    </div>
                  ))
                }
                {user?.tags.length !== 0 ? (
                  <div className="mt-3">
                    <h4>Tags watched</h4>
                    {user?.tags.map((tag) => (
                      <p key={tag}>{tag}</p>
                    ))}
                  </div>
                ) : (
                  <div className="mt-3 text-secondary">
                    <p>0 tags watched</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="offcanvas offcanvas-end" id="EditProfile">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">Edit Profile</h1>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form className="EditProfileForm">
            <input placeholder="Display Name" className="mt-3 ps-1" />
            <input placeholder="About" className="mt-3 ps-1" />
            <input placeholder="Tags" className="mt-3 ps-1" />
            <br />
            <button className="btn btn-primary mt-3" type="submit">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
