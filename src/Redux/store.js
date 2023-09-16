import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./reducer/globalReducer";
import authReducer from "./reducer/authReducer";
import caseService from "./services/caseService";

// Redux Store
const Store = configureStore({
  reducer: {
    globalReducer: globalReducer,
    authReducer: authReducer,
    [caseService.reducerPath]: caseService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(caseService.middleware),
});
export default Store;
