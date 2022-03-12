import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from '../../components/Form/Form';
import moviePoster from '../../assets/images/image-gray.jpeg';
import './Register.css';

const Register = () => {
  const view = useSelector((state) => state.view);

  return (
    <div className="Register-container">
      <figure className="Register-image">
        <img src={moviePoster} alt="Movie Poster" />
      </figure>
      <Form view={view} />
    </div>
  );
};

export { Register };
