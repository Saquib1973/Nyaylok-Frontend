import { createSlice } from "@reduxjs/toolkit";
// import jwtDecode from "jwt-decode";
const tokenLocalStorage = localStorage.getItem("userToken");
// //function to verify expired token
// function verifyToken() {
//   if (tokenLocalStorage) {
//     //decode using jwt-decode function
//     const decode = jwtDecode(tokenLocalStorage);
//     //expiresIn stores the time the token was created
//     const expiresIn = new Date(decode.exp * 1000);
//     if (expiresIn < new Date()) {
//       localStorage.removeItem("admin-token");
//       return null;
//     } else {
//       return tokenLocalStorage;
//     }
//   } else {
//     return null;
//   }
// }

const verifyToken = () => {
  if (tokenLocalStorage) {
    return true;
  } else {
    return false;
  }
};

const authReducer = createSlice({
  //name of the slice
  name: "authReducer",
  // initial state of the slice this is accessed by reducers in the name of state
  initialState: {
    userToken: verifyToken(),
  },
  //functions to update the initial state
  // actions in the function , with that we can get the payload we receive from the frontend
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem("userToken", action.payload);
      state.userToken = action.payload;
    },
    //logout function to delete JWT token from local storage
    logout: (state) => {
      localStorage.removeItem("userToken");
      state.userToken = null;
    },
  },
});

export const { setToken, logout } = authReducer.actions;
export default authReducer.reducer;
