import { createSlice } from "@reduxjs/toolkit";

const globalReducer = createSlice({
  name: "globalReducer",
  initialState: {
    message: "",
    type: null,
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    clearMessage: (state) => {
      state.message = "";
      state.type = null;
    },
  },
});
export const { setMessage, clearMessage } = globalReducer.actions;
export default globalReducer.reducer;
