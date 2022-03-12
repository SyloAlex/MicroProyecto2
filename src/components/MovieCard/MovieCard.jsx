import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import noImage from '../../assets/images/image-not-available.png';
import './MovieCard.css';
import { setViewAction } from '../../redux/actions/actionCreators';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const detailsView = () => {
    dispatch(setViewAction('detail-movies'));
  };

  return (
    <Link to={`/movies/${movie.id}`}>
      <div onClick={detailsView} className="MovieCard-container">
        <figure className="MovieCard-image">
          <img
            src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.original_title}-poster`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = noImage;
            }}
          />
        </figure>
        <div className="MovieCard-info">
          <p>
            <span>Título: </span>
            {movie.original_title}
          </p>
          <p>
            <span>Popularidad: </span>
            {movie.popularity}
          </p>
          <p>
            <span>Lenguaje: </span>
            {movie.original_language}
          </p>
          <p>
            <span>Fecha: </span>
            {movie.release_date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export { MovieCard };
