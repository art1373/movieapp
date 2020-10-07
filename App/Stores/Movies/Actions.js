import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  setFavorites: ["favorite"],
});

export const MovieTypes = Types;
export default Creators;
