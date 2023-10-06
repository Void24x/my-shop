import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.scss";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Home;
