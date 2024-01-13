import React from "react";
import CommentList from "./CommentList.jsx";

const comments = [
  {
    name: "Daksh Dhama",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at?",
    replies: [
      {
        name: "Daksh Dhama",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at?",
        replies: [
          {
            name: "Daksh Dhama",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at?",
            replies: [
              {
                name: "Daksh Dhama",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at?",
                replies: [
                  {
                    name: "Daksh Dhama",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at?",
                    replies: [
                      {
                        name: "Daksh Dhama",
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at?",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Daksh Dhama",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at?",
    replies: [
      {
        name: "Daksh Dhama",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at?",
        replies: [
          {
            name: "Daksh Dhama",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at?",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Daksh Dhama",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at?",
    replies: [
      {
        name: "Daksh Dhama",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at?",
        replies: [
          {
            name: "Daksh Dhama",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at?",
            replies: [],
          },
        ],
      },
      {
        name: "Daksh Dhama",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at?",
        replies: [],
      },
    ],
  },
  {
    name: "Daksh Dhama",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at?",
    replies: [],
  },
];

const CommentSection = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl m-2 p-2">Comments</h1>
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentSection;
