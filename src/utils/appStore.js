import appSlice from "./appSlice";

import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
  reducer: {
    appslice: appSlice,
    videoslice: videoSlice,
    searchslice: searchSlice,
    chatslice: chatSlice,
  },
});

export default appStore;
