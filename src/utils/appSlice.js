import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appslice",
  initialState: {
    isMenuToggle: true,
  },
  reducers: {
    toggleMenuView: (state) => {
      state.isMenuToggle = !state.isMenuToggle;
    },
  },
});

export const { toggleMenuView } = appSlice.actions;

export default appSlice.reducer;
