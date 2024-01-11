import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { VIDEO_INFO_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { closeMenuView } from "../../utils/appSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenuView());
    fetchVideoData();
  }, []);

  const fetchVideoData = async () => {
    const data = await fetch(
      VIDEO_INFO_URL + videoId + "&key=" + process.env.GOOGLE_API_KEY
    );
    const json = await data.json();
  };

  return (
    <div>
      <iframe
        className="p-6 ml-16 rounded-2xl"
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
