import { createSlice } from "@reduxjs/toolkit";

const globalReducer = createSlice({
  name: "globalReducer",
  initialState: {
    message: "",
    type: null,
  },
  reducers: {
    // Function to set a message in the dynamic island
    setMessage: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    // Function to clear the message in the dynamic island
    clearMessage: (state) => {
      state.message = "";
      state.type = null;
    },
  },
});
export const { setMessage, clearMessage } = globalReducer.actions;
export default globalReducer.reducer;
