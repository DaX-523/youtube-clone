import React from "react";
import SidePanelItem from "./SidePanelItem.jsx";
import { useSelector } from "react-redux";

const SidePannel = () => {
  const top = ["Home", "Shorts", "Subscriptions"];
  const middle = ["You", "History"];
  const bottom = [
    "Trending",
    "Shopping",
    "Muisc",
    "Films",
    "Live",
    "Gaming",
    "News",
    "Sport",
    "Learning",
    "Fasion & beauty",
    "Podcasts",
  ];
  const moreYT = ["YouTube Premium", "YouTube Music", "YouTube Kids"];
  const etc = ["Browse channels"];
  const siteOptions = ["Settings", "Report history", "Help", "Send Feedback"];

  const isMenuView = useSelector((store) => store?.appslice?.isMenuToggle);

  if (!isMenuView) return null;
  return (
    <div className="min-w-64 h-screen overflow-y-scroll">
      <SidePanelItem names={top} />
      <br />
      <SidePanelItem names={middle} />
      <br />
      <h1 className="font-bold text-xl m-1 p-1 px-2">Explore</h1>
      <SidePanelItem names={bottom} />
      <br />
      <SidePanelItem names={etc} />
      <br />
      <h1 className="font-bold text-xl m-1 p-1 px-2">More from YouTube</h1>
      <SidePanelItem names={moreYT} />
      <br />
      <SidePanelItem names={siteOptions} />
    </div>
  );
};

export default SidePannel;
