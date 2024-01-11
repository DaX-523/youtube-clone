import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard.jsx";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const videos = useSelector((store) => store?.videoslice?.videos);
  if (!videos.length) return null;

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video?.id} to={"/watch?v=" + video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
