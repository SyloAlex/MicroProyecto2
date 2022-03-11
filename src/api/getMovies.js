const api_key = '1f963cf1e3d65d1755fa804221400130';

const getMovies = async (page) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${page}`
    const movies = await fetch(url)
    const json = await movies.json()

    return json;
}

export { getMovies };