import { createAction, createReducer } from "@reduxjs/toolkit";

export const setDebuggerUser = createAction("SET_DEBUGGERUSER");

const initialState = true;

const reducer = createReducer(initialState, {
  [setDebuggerUser]: (state, action) => {
    return action.payload;
  },
});

export default reducer;
