import React from "react";

const SidePanelItem = ({ names }) => {
  return (
    <div className="text-lg ">
      <ul>
        {names.map((name, index) => (
          <li
            className="m-1 p-1 px-5 bg-gray-50 hover:bg-slate-100 cursor-pointer"
            key={index}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidePanelItem;
