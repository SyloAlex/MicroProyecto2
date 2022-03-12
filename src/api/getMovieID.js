const apiKey = '1f963cf1e3d65d1755fa804221400130';

const getMovieID = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const movies = await fetch(url);
  const json = await movies.json();

  return json;
};

export { getMovieID };
