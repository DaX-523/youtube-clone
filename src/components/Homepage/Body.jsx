import React from "react";
import SidePanel from "./SidePanel.jsx";
import MainContainer from "./MainContainer.jsx";

const Body = () => {
  return (
    <div className="flex ">
      <SidePanel />
      <MainContainer />
    </div>
  );
};

export default Body;
