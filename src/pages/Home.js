import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import HomeMainBar from "../components/HomeMainBar";
import RightSideBar from "../components/RightSideBar";
import  './CSS/Home.css'
function Home() {
  return (
    <div className="containerHome mt-5 row">
      <div className="leftsidebarHome col-2">
        <LeftSideBar />
      </div>
      <div className="mainrightbarHome col-8">
        <HomeMainBar />
        <RightSideBar />
      </div>
    </div>
  );
}

export default Home;
