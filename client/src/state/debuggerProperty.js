import { createAction, createReducer } from "@reduxjs/toolkit";

export const setDebuggerProperty = createAction("SET_DEBUGGERPROPERTY");

const initialState = true;

const reducer = createReducer(initialState, {
  [setDebuggerProperty]: (state, action) => {
    return action.payload;
  },
});

export default reducer;
