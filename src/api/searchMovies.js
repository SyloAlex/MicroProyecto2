const apiKey = '1f963cf1e3d65d1755fa804221400130';

const searchMovies = async (page, input) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}&page=${page}`;
  const movies = await fetch(url);
  const json = await movies.json();

  return json;
};

export { searchMovies };
