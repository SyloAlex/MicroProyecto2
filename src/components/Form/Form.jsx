import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase/firebaseConfig';
import {
  setUserAction,
  setViewAction,
  setErrorAction
} from '../../redux/actions/actionCreators';
import { ServiceButtons } from '../ServiceButtons/ServiceButtons';
import { useForm } from 'react-hook-form';
import movieIcon from '../../assets/logos/clapperboard.png';
import './Form.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const view = useSelector((state) => state.view);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (view === 'register') {
      try {
        await auth.createUserWithEmailAndPassword(data.email, data.password);
        dispatch(setUserAction({ email: data.email }));
        dispatch(setViewAction('movies'));
        navigate('/movies');
      } catch (e) {
        dispatch(setErrorAction(e.code))
      }
    } else {
      try {
        await auth.signInWithEmailAndPassword(data.email, data.password);
        dispatch(setUserAction({ email: data.email }));
        dispatch(setViewAction('movies'));
        navigate('/movies');
      } catch (e) {
        dispatch(setErrorAction(e.code))
      }
    }
  };

  return (
    <form className="Form-container" onSubmit={handleSubmit(onSubmit)}>
      {view === 'register' ? <p>Registrate</p> : <p>Ingresa</p>}
      <ServiceButtons />
      <div className="Form-inputs">
        <input
          {...register('email')}
          id="email"
          type="email"
          placeholder="Correo Electrónico"
        />
        <input
          {...register('password')}
          id="password"
          type="password"
          placeholder="Contraseña"
        />
      </div>
      {view === 'register' ? (
        <button type="submit" id="Register-button" className="Form-button">
          Registrar
        </button>
      ) : (
        <button type="submit" id="Login-button" className="Form-button">
          Ingresar
        </button>
      )}
      <figure className="Movie-logo">
        <img src={movieIcon} alt="Logo" />
      </figure>
    </form>
  );
};

export { Form };
