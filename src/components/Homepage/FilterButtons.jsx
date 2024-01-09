import React from "react";

const FilterButtons = ({ name }) => {
  return (
    <div>
      <button className=" m-2 p-2 px-2 rounded-lg bg-gray-100 hover:bg-gray-200 max-w-96 whitespace-nowrap ">
        {name}
      </button>
    </div>
  );
};

export default FilterButtons;
