import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  return (
    <div className="w-72 shadow-lg p-2 m-2">
      <img
        className="rounded-sm"
        src={snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <h2 className="font-bold">{snippet?.title}</h2>
      <p className="text-gray-400">{snippet?.channelTitle}</p>
      <p>{statistics?.viewCount} views</p>
    </div>
  );
};

export default VideoCard;
