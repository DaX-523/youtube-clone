import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuView } from "../../utils/appSlice";
import {
  HAMBURGER_MENU_URL,
  USER_ICON_URL,
  VIDEO_SEARCH_URL,
  YOUTUBE_LOGO_URL,
} from "../../utils/constants";
import { cacheSearchResults } from "../../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowShuggestions] = useState(false);
  const dispatch = useDispatch();
  const cachedResults = useSelector((store) => store.searchslice);

  const toggleMenuHandler = () => {
    dispatch(toggleMenuView());
  };

  const getSearchResults = async () => {
    console.log("apicall " + searchQuery);
    const data = await fetch(VIDEO_SEARCH_URL + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheSearchResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedResults[searchQuery]) {
        setSuggestions(cachedResults[searchQuery]);
      } else {
        getSearchResults();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="flex justify-between m-2 p-5 shadow-xl">
      <div className="flex ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer "
          alt="menu"
          src={HAMBURGER_MENU_URL}
        />
        <a href={"/"}>
          <img className="h-8 ml-3" src={YOUTUBE_LOGO_URL} alt="youtube-logo" />
        </a>
      </div>
      <div className="flex items-center">
        <div>
          <input
            className="w-[32rem] h-9 border border-gray-500 rounded-l-full px-3 py-2"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowShuggestions(true)}
            onBlur={() => setShowShuggestions(false)}
          />
          <button className=" border border-gray-500 rounded-r-full bg-gray-100 hover:bg-gray-200 h-9 px-3">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute top-[66px] bg-white w-[32rem] shadow-lg rounded-lg border border-gray-200">
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className="px-4 py-2 hover:bg-gray-100">
                  🔍︎ {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img className="h-8" src={USER_ICON_URL} alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
