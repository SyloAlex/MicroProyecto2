import React, { useState } from 'react';
import { Form } from '../../components/Form/Form';
import moviePoster from '../../assets/images/sharknado.jpeg';
import './Login.css';
import { useSelector } from 'react-redux';
import { Modal } from '../../containers/Modal/Modal';
import LoginMessage from '../../components/LoginMessage/LoginMessage';

const Login = () => {
  const errorValue = useSelector((state) => state.error);
  const view = useSelector((state) => state.view);
  return (
    <div className="Login-container">
      <figure className="Login-image">
        <img src={moviePoster} alt="Movie Poster" />
      </figure>
      <Form view={view} />
      {errorValue !== '' && (
        <Modal>
          <LoginMessage />
        </Modal>
      )}
    </div>
  );
};

export { Login };
