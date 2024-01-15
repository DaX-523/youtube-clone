import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatslice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // if (state.messages.length >= 10) {
      //   state.messages.shift();
      // }
      if (state.messages.length >= 15) {
        state.messages = [...state.messages.slice(1), action.payload];
      } else {
        state.messages.push(action.payload);
      }
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
