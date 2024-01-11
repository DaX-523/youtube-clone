import React from "react";
import Header from "./Homepage/Header.jsx";
import Body from "./Homepage/Body.jsx";
import "../index.css";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./Videopage/WatchPage.jsx";
import MainContainer from "./Homepage/MainContainer.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
