export const hourMinuteConverter = (totalMinutes) => {
  var hours = Math.floor(totalMinutes / 60);
  var minutes = totalMinutes % 60;

  let results = `${hours}h ${minutes}m`;
  return results;
};

export const addFavoriteMovie = (movieId, favorites) => {
  let exisiting = favorites.find((movie) => movie === movieId);
  console.log({ movieId });
  if (!exisiting) {
    return [...favorites, movieId];
  } else {
    return favorites.filter((movie) => movie !== movieId);
  }
};
