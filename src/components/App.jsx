import React from "react";
import Header from "./Homepage/Header.jsx";
import Body from "./Homepage/Body.jsx";
import "../index.css";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
