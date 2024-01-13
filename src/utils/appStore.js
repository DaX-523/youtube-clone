import appSlice from "./appSlice";

import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";

const appStore = configureStore({
  reducer: {
    appslice: appSlice,
    videoslice: videoSlice,
    searchslice: searchSlice,
  },
});

export default appStore;
