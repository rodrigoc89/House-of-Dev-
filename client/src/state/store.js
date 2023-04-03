import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./user";
import favoriteReducer from "./favorites";
import appointmentReducer from "./appointment";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    favorite: favoriteReducer,
    appointment: appointmentReducer,
  },
});

export default store;
