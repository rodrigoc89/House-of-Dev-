import { createAction, createReducer } from "@reduxjs/toolkit";

export const setMikkieHerramientaProperty = createAction("SET_MIKKIEHERRAMIENTAPROPERTY");

const initialstate = true;

const reducer = createReducer(initialstate, {
  [setMikkieHerramientaProperty]: (state, action) => {
    return action.payload;
  },
});

export default reducer;