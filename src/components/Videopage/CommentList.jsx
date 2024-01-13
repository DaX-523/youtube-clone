import React, { Fragment } from "react";
import Comment from "./Comment.jsx";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <Fragment key={index}>
          <Comment name={comment.name} comment={comment.text} />
          <div className="ml-4 border border-l-black border-spacing-2">
            <CommentList comments={comment?.replies} />
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default CommentList;
