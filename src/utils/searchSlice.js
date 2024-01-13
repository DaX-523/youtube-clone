import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searches",
  initialState: {},
  reducers: {
    cacheSearchResults: (state, action) => {
      // state = Object.assign(state, action.payload);
      state = { ...state, ...action.payload }; //better approach
      return state;
    },
  },
});

export const { cacheSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
