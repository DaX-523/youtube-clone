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
    closeMenuView: (state) => {
      state.isMenuToggle = false;
    },
  },
});

export const { toggleMenuView, closeMenuView } = appSlice.actions;

export default appSlice.reducer;
