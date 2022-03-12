import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateView, logOut } from '../../utils/utils';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <nav className="Navbar-container">
      <ul className="Navbar-list">
        {user.email === null ? (
          <React.Fragment>
            <Link to={'/'}>
              <li
                onClick={() => updateView({ prop: dispatch, view: 'login' })}
                className="Navbar-element"
              >
                Ingresa
              </li>
            </Link>
            <Link to={'/register'}>
              <li
                onClick={() => updateView({ prop: dispatch, view: 'register' })}
                className="Navbar-element"
              >
                Regístrate
              </li>
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to={'/movies'}>
              <li
                onClick={() => updateView({ prop: dispatch, view: 'movies' })}
                className="Navbar-element"
              >
                Películas
              </li>
            </Link>
            <Link to={'/'}>
              <li
                onClick={() => logOut({ prop: dispatch, view: 'login' })}
                className="Navbar-element"
              >
                Logout
              </li>
            </Link>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export { Navbar };
