import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./reducer/globalReducer";
import authReducer from "./reducer/authReducer";
import caseService from "./services/caseService";
import authService from "./services/authService";

// Redux Store
const Store = configureStore({
  reducer: {
    globalReducer: globalReducer,
    authReducer: authReducer,
    [caseService.reducerPath]: caseService.reducer,
    [authService.reducerPath]: authService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(caseService.middleware)
      .concat(authService.middleware),
});
export default Store;
