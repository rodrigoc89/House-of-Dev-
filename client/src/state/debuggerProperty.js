import { createAction, createReducer } from "@reduxjs/toolkit";

export const setDebuggerProperty = createAction("SET_DEBUGGERPROPERTY");
export const addProperty = createAction("ADD_APPOINTMENT");
export const updateInfo = createAction("UPDATE_INFO");
export const removeProperty = createAction("REMOVE_PROPERTY");

const initialState = [];

const reducer = createReducer(initialState, {
  [setDebuggerProperty]: (state, action) => {
    console.log(state[0]);
    return action.payload;
  },
  [addProperty]: (state, action) => {
    return state[0] ? [...state, action.payload] : [action.payload];
  },
  [updateInfo]: (state, action) => {
    return state.map((property, ) => {
      return property.id === action.payload.id ? action.payload : property;
    });
  },
  [removeProperty]: (state, action) => {
    return state.filter((property) => property.id !== action.payload);
  },
});

export default reducer;
