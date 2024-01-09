import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videoslice",
  initialState: {
    videos: [],
  },
  reducers: {
    addMoviesData: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { addMoviesData } = videoSlice.actions;

export default videoSlice.reducer;
