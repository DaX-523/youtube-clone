import appSlice from "./appSlice";

import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videoSlice";

const appStore = configureStore({
  reducer: {
    appslice: appSlice,
    videoslice: videoSlice,
  },
});

export default appStore;
