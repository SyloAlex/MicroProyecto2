import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import goBackIcon from '../../assets/logos/go-back.png';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { setViewAction } from '../../redux/actions/actionCreators';

const Header = () => {
  const view = useSelector((state) => state.view);
  const dispatch = useDispatch();
  const moviewView = () => {
    dispatch(setViewAction('movies'))
  }
  return (
    <div className="Header-container">
      {view === 'detail-movies' ? (
        <Link to={'/movies'}>
          <figure onClick={moviewView} className="Header-go-back">
            <img src={goBackIcon} alt="Regresar" />
          </figure>
        </Link>
      ) : (
        <div></div>
      )}
      <Navbar />
    </div>
  );
};

export { Header };
