import { createAction, createReducer } from "@reduxjs/toolkit";

export const setType = createAction("SET_TYPE");

const initialState = null;

const reducer = createReducer(initialState, {
  [setType]: (state, action) => {
    return action.payload;
  },
});

export default reducer;
