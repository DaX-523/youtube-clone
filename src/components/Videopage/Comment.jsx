import React from "react";
import { USER_ICON_URL } from "../../utils/constants";

const Comment = ({ name, comment }) => {
  return (
    <div className="flex m-2 bg-gray-100 ">
      <img className="w-12 h-12 py-2" src={USER_ICON_URL} alt="user-icon" />
      <div className="flex flex-col px-2 mx-2">
        <p className="py-1 font-semibold">{name}</p>
        <p className="py-1">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
