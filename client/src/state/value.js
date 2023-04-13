import { createAction, createReducer } from "@reduxjs/toolkit";

export const setValue = createAction("SET_VALUE");

const initialState = null;

const reducer = createReducer(initialState, {
  [setValue]: (state, action) => {
    return action.payload;
  },
});

export default reducer;
