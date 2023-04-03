import { createAction, createReducer } from "@reduxjs/toolkit";

export const setMikkieHerramientaUser = createAction("SET_MIKKIEHERRAMIENTAUSER");

const initialstate = true;

const reducer = createReducer(initialstate, { 
  [setMikkieHerramientaUser]: (state, action) => {
    return action.payload;
  },
});

export default reducer;
