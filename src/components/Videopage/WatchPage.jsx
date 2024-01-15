import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { VIDEO_INFO_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { closeMenuView } from "../../utils/appSlice";
import CommentSection from "./CommentSection.jsx";
import LiveChat from "./LiveChat.jsx";

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
    // console.log(json.items[0]);
  };

  return (
    <div className="w-full">
      <div className="flex">
        <div>
          <iframe
            className=" ml-12 rounded-lg"
            width="1100"
            height="550"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <LiveChat />
      </div>
      <div>
        <CommentSection />
      </div>
    </div>
  );
};

export default WatchPage;
