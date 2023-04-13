import { createAction, createReducer } from "@reduxjs/toolkit";

export const setDebuggerUser = createAction("SET_DEBUGGERUSER");
export const updateInfoUser = createAction("ADD_INFOUSER");
export const removeUser = createAction("REMOVE_USER");
const initialState = [];

const reducer = createReducer(initialState, {
  [setDebuggerUser]: (state, action) => {
    return action.payload;
  },
  [updateInfoUser]: (state, action) => {
    return state.map((user) => {
      return user.id === action.payload.id ? action.payload : user;
    });
  },
  [removeUser]: (state, action) => {
    return state.filter((user) => user.id !== action.payload);
  },
});

export default reducer;
