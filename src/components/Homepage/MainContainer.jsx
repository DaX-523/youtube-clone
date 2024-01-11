import React, { useEffect } from "react";
import ButtonList from "./ButtonList.jsx";
import VideoContainer from "./VideoContainer.jsx";
import { useDispatch } from "react-redux";
import { YT_VIDEOS_URL } from "../../utils/constants.js";
import { addMoviesData } from "../../utils/videoSlice.js";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YT_VIDEOS_URL + process.env.GOOGLE_API_KEY);
    const json = await data.json();
    dispatch(addMoviesData(json.items));
  };
  return (
    <div className="">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
