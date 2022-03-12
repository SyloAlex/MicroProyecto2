import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieID } from '../../api/getMovieID';
import noImage from '../../assets/images/image-not-available.png'
import './MovieDetails.css'

const MovieDetails = () => {
    const id = useParams();
    const [movie, setMovie] = useState(
        {
            title: '',
            genres: [],
            original_language: '',
            release_date: '',
            poster_path: '',
            budget: '',
            overview: '',
            popularity: 0,
            production_companies: [],
            status: ''
        }
    );

    useEffect(async () => {
        await getMovieID(id.movieID)
            .then(data => {
                setMovie(data);
                console.log(data);
            })
    }, [])

    return (
        <div className="MovieDetails-container">
            <figure className="MovieDetails-image-container">
                <img
                    src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.original_title}-poster`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = noImage;
                    }} />
            </figure>
            <div className="MovieDetails-info">
                <div className="MovieDetails-info-details">
                    <p><span>Titulo: </span>{movie.title}</p>
                </div>
                <div className="MovieDetails-info-details">
                    <p><span>Resumen: </span>{movie.overview}</p>
                </div>
                <div className="MovieDetails-flex-container">
                    <div className="MovieDetails-info-noarray">
                        <div className="MovieDetails-info-details">
                            <p><span>Lenguaje: </span>{movie.original_language}</p>
                        </div>
                        <div className="MovieDetails-info-details">
                            <p><span>Fecha: </span>{movie.release_date}</p>
                        </div>
                        <div className="MovieDetails-info-details">
                            <p><span>Presupuesto: </span>{movie.budget}</p>
                        </div>
                        <div className="MovieDetails-info-details">
                            <p><span>Popularidad: </span>{movie.popularity}</p>
                        </div>
                        <div className="MovieDetails-info-details">
                            <p><span>Estado: </span>{movie.status}</p>
                        </div>
                    </div>
                    <div className="MovieDetails-info-array">
                        <div className="MovieDetails-info-genre">
                            <p><span>Generos: </span></p>
                            {movie.genres.map((genre) => (
                                <p key={genre.id}>{` ${genre.name} `}</p>
                            ))}
                        </div>
                        <div className="MovieDetails-info-production">
                            <p><span>Productoras: </span></p>
                            {movie.production_companies.map((company) => (
                                <p key={company.id}>{` ${company.name} `}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MovieDetails }