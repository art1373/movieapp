import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import { reducer as AuthReducer } from "./Authentication/Reducers";
import { reducer as MovieReducer } from "./Movies/Reducers";

export default () => {
  const rootReducer = combineReducers({
    auth: AuthReducer,
    movie: MovieReducer,
  });

  return configureStore(rootReducer);
};
