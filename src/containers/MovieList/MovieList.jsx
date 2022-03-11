import React, { useState } from 'react'
import { useEffect } from 'react'
import { getSoonMovies } from '../../api/getSoonMovies'
import { getMovies } from '../../api/getMovies'
import { MovieCard } from '../../components/MovieCard/MovieCard'
import { useSelector } from 'react-redux'
import { prevPage, nextPage } from '../../utils/utils'
import './MovieList.css'

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);
    const view = useSelector(state => state.view)

    useEffect(async () => {
        if (view === 'soon-movies' || view === 'movies') {
            await getSoonMovies()
                .then(data => {
                    setMovieList(data.results);
                })
        } else {
            await getMovies(page)
                .then(data => {
                    setMovieList(data.results);
                })
        }
    }, [view, page])
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
                    {page === 1 ?
                        <button type='button' id='MovieList-prev' disabled>Anterior</button>
                        :
                        <button onClick={() => prevPage(page, setPage)} type='button' id='MovieList-prev'>Anterior</button>
                    }
                    {page < 1000 ?
                        <button onClick={() => nextPage(page, setPage)} type='button' id='MovieList-next'>Siguiente</button>
                        :
                        <button type='button' id='MovieList-next' disabled>Anterior</button>
                    }
                </div>
                :
                null
            }
        </div>
    )
}

export { MovieList }

<img src="http://image.tmdb.org/t/p/w500/1fd66a0c216a49a2dfce.jpeg" alt="Spider-Man: No Way Home-poster"></img>