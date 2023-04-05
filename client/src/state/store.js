import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./user";
import favoriteReducer from "./favorites";
import appointmentReducer from "./appointment";
import setDebuggerUserReducer from "./debuggerUser";
import setDebuggerPropertyReducer from "./debuggerProperty";
import typeReducer from "./type";
import valueReducer from "./value";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    favorite: favoriteReducer,
    appointment: appointmentReducer,
    debuggerUser: setDebuggerUserReducer,
    debuggerProperty: setDebuggerPropertyReducer,
    type: typeReducer,
    value: valueReducer,
  },
});

export default store;
