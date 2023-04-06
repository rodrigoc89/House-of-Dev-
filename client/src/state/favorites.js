import { createAction, createReducer } from "@reduxjs/toolkit";

export const setFavorite = createAction("SET_FAVORITE");
export const addToFavorite= createAction("ADD_FAVORITE")

const initialState = [];

const reducer = createReducer(initialState, {
  [setFavorite]: (state, action) => {
    return action.payload;
  },
  [addToFavorite]:(state, action)=>{
   return state[0] ? [...state, action.payload] : [action.payload];
  }
});

export default reducer;
