import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./reducer/globalReducer";
import authReducer from "./reducer/authReducer";
import caseService from "./services/caseService";
import authService from "./services/authService";
import ipcService from "./services/ipcService";

// Redux Store
const Store = configureStore({
  reducer: {
    globalReducer: globalReducer,
    authReducer: authReducer,
    [caseService.reducerPath]: caseService.reducer,
    [authService.reducerPath]: authService.reducer,
    [ipcService.reducerPath]: ipcService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(caseService.middleware)
      .concat(authService.middleware)
      .concat(ipcService.middleware),
});
export default Store;
