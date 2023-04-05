import { createAction, createReducer } from "@reduxjs/toolkit";

export const setFavorite = createAction("SET_FAVORITE");

const initialState = [];

const reducer = createReducer(initialState, {
  [setFavorite]: (state, action) => {
    return action.payload;
  },
});

export default reducer;
