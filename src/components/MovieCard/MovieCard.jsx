import React from 'react'
import noImage from '../../assets/images/image-not-available.png'
import './MovieCard.css'

const MovieCard = ({ title, image, popularity, language, date }) => {
    return (
        <div className="MovieCard-container">
            <figure className="MovieCard-image">
                <img
                    src={`http://image.tmdb.org/t/p/w500${image}`}
                    alt={`${title}-poster`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = noImage;
                    }} />
            </figure>
            <div className="MovieCard-info">
                <p><span>Título: </span>{title}</p>
                <p><span>Popularidad: </span>{popularity}</p>
                <p><span>Lenguaje: </span>{language}</p>
                <p><span>Fecha: </span>{date}</p>
            </div>
        </div>
    )
}

export { MovieCard }