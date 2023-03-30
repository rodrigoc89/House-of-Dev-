import { createAction, createReducer } from "@reduxjs/toolkit";

export const setFavorite = createAction("SET_FAVORITE");

const initialstate = [];

const reducer = createReducer(initialstate, {
  [setFavorite]: (state, action) => {
    return action.payload;
  },
});

export default reducer;
