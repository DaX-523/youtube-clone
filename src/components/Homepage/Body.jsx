import React from "react";
import SidePannel from "./SidePannel.jsx";
import MainContainer from "./MainContainer.jsx";

const Body = () => {
  return (
    <div className="flex">
      <SidePannel />
      <MainContainer />
    </div>
  );
};

export default Body;
