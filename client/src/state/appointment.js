import { createAction, createReducer } from "@reduxjs/toolkit";

export const setAppointment = createAction("SET_APPOINTMENT");

const initialstate = [];

const reducer = createReducer(initialstate, {
  [setAppointment]: (state, action) => {
    return action.payload;
  },
});

export default reducer;
