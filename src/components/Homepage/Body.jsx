import React from "react";
import SidePanel from "./SidePanel.jsx";
import MainContainer from "./MainContainer.jsx";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex ">
      <SidePanel />
      <Outlet />
    </div>
  );
};

export default Body;
