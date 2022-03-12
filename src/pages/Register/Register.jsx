import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from '../../components/Form/Form';
import moviePoster from '../../assets/images/sharknado.jpeg';
import { Modal } from '../../containers/Modal/Modal';
import LoginMessage from '../../components/LoginMessage/LoginMessage'
import './Register.css';

const Register = () => {
  const errorValue = useSelector(state => state.error)
  const view = useSelector((state) => state.view);

  return (
    <div className="Register-container">
      <figure className="Register-image">
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

export { Register };
