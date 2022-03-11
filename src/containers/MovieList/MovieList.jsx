import React, { useState } from 'react'
import { useEffect } from 'react'
import { getSoonMovies } from '../../api/getSoonMovies'
import { getMovies } from '../../api/getMovies'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import './MovieList.css'
import { useSelector } from 'react-redux'

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const view = useSelector(state => state.view)

    useEffect(async () => {
        if (view === 'soon-movies' || view === 'movies') {
            await getSoonMovies()
                .then(data => {
                    setMovieList(data.results);
                    console.log(data);
                })
        } else {
            await getMovies()
                .then(data => {
                    setMovieList(data.results);
                    console.log(data);
                })
        }
    }, [view])
    return (
        <div className="MovieList-container">
            {view === 'search-movies' ?
                <div className='MovieList-input-container'>
                    <input id='search-input' type="text" placeholder='Busca tu película favorita' />
                </div>
                :
                null
            }
            <div className='MovieList-display'>
                {view === 'movies' || view === 'soon-movies' ?
                    movieList.slice(0, 12).map((movie) => {
                        return (
                            <MovieCard key={movie.id}
                                title={movie.original_title}
                                image={movie.poster_path}
                                popularity={movie.popularity}
                                language={movie.original_language}
                                status={movie.status} />
                        )
                    })
                    :
                    movieList.map((movie) => {
                        return (
                            <MovieCard key={movie.id}
                                title={movie.original_title}
                                image={movie.poster_path}
                                popularity={movie.popularity}
                                language={movie.original_language}
                                status={movie.status} />
                        )
                    })
                }
            </div>
            {view === 'search-movies' ?
                <div className='MovieList-page'>
                    <button type='button' className='MovieList-previous'>Anterior</button>
                    <button type='button' className='MovieList-next'>Siguiente</button>
                </div>
                :
                null
            }
        </div>
    )
}

export { MovieList }

<img src="http://image.tmdb.org/t/p/w500/1fd66a0c216a49a2dfce.jpeg" alt="Spider-Man: No Way Home-poster"></img>