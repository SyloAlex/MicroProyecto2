const api_key = '1f963cf1e3d65d1755fa804221400130';
const test = 'https://api.themoviedb.org/3/discover/movie?api_key=1f963cf1e3d65d1755fa804221400130&language=en-US&with_genres=28'
const test2 = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=Spider&page=2`
const test3 = `https://api.themoviedb.org/movie/upcoming?api_key=${api_key}`
const test4 = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
const test5 = `https://api.themoviedb.org/3/movie/455?api_key=${api_key}&language=en-US`
const test6 = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`

const getMovies = async () => {
    const movieDB = []
    const movies = await fetch(test6)
    const json = await movies.json()

    return json;
}

export { getMovies };