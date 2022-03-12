const apiKey = '1f963cf1e3d65d1755fa804221400130';

const getSoonMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
  const movies = await fetch(url);
  const json = await movies.json();

  return json;
};

export { getSoonMovies };
