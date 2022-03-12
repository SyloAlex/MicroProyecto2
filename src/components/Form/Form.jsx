import React from 'react'
import { useDispatch } from 'react-redux'
import { setUserAction, setViewAction } from '../../redux/actions/actionCreators'
import { Link } from 'react-router-dom'
import { ServiceButtons } from '../ServiceButtons/ServiceButtons'
import movieIcon from '../../assets/logos/clapperboard.png'
import './Form.css'

const Form = ({ view }) => {
    const dispatch = useDispatch();
    const login = () => {
        dispatch(setViewAction('movies'));
        dispatch(setUserAction({ email: 'alex@gmail.com', password: 'silksongisamyth' }))
    }
    return (
        <form className='Form-container'>
            {view === 'register' ?
                <p>Registrate</p>
                : <p>Ingresa</p>}
            <ServiceButtons />
            <div className="Form-inputs">
                <input id='email' type="email" placeholder='Correo Electrónico' />
                <input id='password' type="password" placeholder='Contraseña' />
            </div>
            <Link to={'/movies'}><button onClick={login} className='Form-button'>{view === 'register' ?
                'Registrar'
                : 'Ingresar'}</button></Link>
            <figure className="Movie-logo">
                <img src={movieIcon} alt="Logo" />
            </figure>
        </form>
    )
}

export { Form }