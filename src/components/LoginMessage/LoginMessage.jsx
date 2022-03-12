import React from 'react';
import './LoginMessage.css';
import movieIcon from '../../assets/logos/clapperboard.png';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorAction } from '../../redux/actions/actionCreators';

const LoginMessage = () => {
  const errorValue = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setErrorAction(''));
  };
  return (
    <div className="LoginMessage-container">
      <figure className="LoginMessage-icon">
        <img src={movieIcon} alt="Movie icon" />
      </figure>
      <p>Se produjo un error!</p>
      <p>
        <span>Error: {errorValue}</span>
      </p>
      <p>Por favor vuelva a intentarlo</p>
      <button onClick={closeModal} type="button" className="Go-back">
        Regresar
      </button>
    </div>
  );
};

export default LoginMessage;
