import React from 'react'
import './MovieCard.css'

const MovieCard = ({ title, image, popularity, language, status }) => {
    return (
        <div className="MovieCard-container">
            <figure className="MovieCard-image">
                <img src={`http://image.tmdb.org/t/p/w500${image}`} alt={`${title}-poster`} />
            </figure>
            <div className="MovieCard-info">
                <p><span>Título: </span>{title}</p>
                <p><span>Popularidad: </span>{popularity}</p>
                <p><span>Lenguaje: </span>{language}</p>
                <p><span>Estado: </span>{status}</p>
            </div>
        </div>
    )
}

export { MovieCard }