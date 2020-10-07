import { createReducer } from "reduxsauce";
import { INITIAL_STATE } from "./InitialState";
import { MovieTypes } from "./Actions";
import { addFavoriteMovie } from "../../utils/helpers";

export const addFavorites = (state, { favorite }) => ({
  ...state,
  favorites: addFavoriteMovie(favorite, state.favorites),
});
export const reducer = createReducer(INITIAL_STATE, {
  [MovieTypes.SET_FAVORITES]: addFavorites,
});
