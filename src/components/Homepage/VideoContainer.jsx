import React, { useEffect } from "react";
import { YT_VIDEOS_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addMoviesData } from "../../utils/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YT_VIDEOS_URL);
    const json = await data.json();
    dispatch(addMoviesData(json.items));
  };
  return <div>VideoContainer</div>;
};

export default VideoContainer;
