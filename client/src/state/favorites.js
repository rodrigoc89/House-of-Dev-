import { createAction, createReducer } from "@reduxjs/toolkit";

export const setFavorite = createAction("SET_FAVORITE");
export const addOrRemoveToFavorite = createAction("ADD_FAVORITE");

const initialState = [];

const reducer = createReducer(initialState, {
  [setFavorite]: (state, action) => {
    return action.payload;
  },
  [addOrRemoveToFavorite]: (state, action) => {
    const validate = state.some((validator) => {
      return validator.id === action.payload.id;
    });

    return validate
      ? state.filter((property) => property.id !== action.payload.id)
      : state[0]
      ? [...state, action.payload]
      : [action.payload];
  },
});

export default reducer;
