import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./reducer/globalReducer";
import authReducer from "./reducer/authReducer";

// Redux Store
const Store = configureStore({
  reducer: {
    globalReducer: globalReducer,
    authReducer: authReducer,
  },
  //   middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat()
});

export default Store;
