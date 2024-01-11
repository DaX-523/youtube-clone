import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenuView } from "../../utils/appSlice";
import { VIDEO_SEARCH_URL } from "../../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowShuggestions] = useState(false);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenuView());
  };
  const getSearchResults = async () => {
    console.log(VIDEO_SEARCH_URL + searchQuery);
    const data = await fetch(VIDEO_SEARCH_URL + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };
  useEffect(() => {
    const timer = setTimeout(() => getSearchResults(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);
  return (
    <div className="flex justify-between m-2 p-5 shadow-xl">
      <div className="flex ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer "
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="
        />
        <a href={"/"}>
          <img
            className="h-8 ml-3"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
          />
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
        <img
          className="h-8"
          src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
