import { createAction, createReducer } from "@reduxjs/toolkit";

export const setAppointment = createAction("SET_APPOINTMENT");
export const addAppointment = createAction("ADD_APPOINTMENT");

const initialstate = [];

const reducer = createReducer(initialstate, {
  [setAppointment]: (state, action) => {
    return action.payload;
  },
  [addAppointment]: (state, action) => {
    state[0] ? [...state, action.payload] : [action.payload];
  },
});

export default reducer;
