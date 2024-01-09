import React from "react";
import FilterButtons from "./FilterButtons.jsx";

const ButtonList = () => {
  const buttonTags = [
    "All",
    "Music",
    "News",
    "Live",
    "Lo-fi",
    "Mantras",
    "Gaming",
    "T-Series",
    "Game shows",
    "Indian pop music",
    "Trains",
    "Cricket",
    "Podcasts",
    "Gadgets",
    "Tourism",
    "Recently uploaded",
  ];
  return (
    <div className="flex overflow-x-hidden">
      {buttonTags.map((name, index) => {
        return <FilterButtons key={index} name={name} />;
      })}
    </div>
  );
};

export default ButtonList;
