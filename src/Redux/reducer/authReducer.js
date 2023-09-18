import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
const tokenLocalStorage = localStorage.getItem("userToken");

// Verify Token Function
function verifyToken() {
  if (tokenLocalStorage) {
    //decode using jwt-decode function
    const decode = jwtDecode(tokenLocalStorage);
    //expiresIn stores the time the token was created
    const expiresIn = new Date(decode.exp * 1000);
    if (expiresIn < new Date()) {
      localStorage.removeItem("userToken");
      return null;
    } else {
      return tokenLocalStorage;
    }
  } else {
    return null;
  }
}

const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    userToken: verifyToken(),
  },
  reducers: {
    // Function to set userToken with the given token in localStorage
    setToken: (state, action) => {
      localStorage.setItem("userToken", action.payload);
      state.userToken = action.payload;
    },
    // Function to remove userToken from localStorage
    logout: (state) => {
      localStorage.removeItem("userToken");
      state.userToken = null;
    },
  },
});

export const { setToken, logout } = authReducer.actions;
export default authReducer.reducer;

// //function to verify expired token
