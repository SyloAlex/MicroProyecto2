const api_key = '1f963cf1e3d65d1755fa804221400130';

const test4 = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`

const getSoonMovies = async () => {
    const movieDB = []
    const movies = await fetch(test4)
    const json = await movies.json()

    return json;
}

export { getSoonMovies };