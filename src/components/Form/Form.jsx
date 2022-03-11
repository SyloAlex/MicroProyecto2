import React from 'react'
import { useDispatch } from 'react-redux'
import { setViewAction } from '../../redux/actions/actionCreators'
import { Link } from 'react-router-dom'
import { ServiceButtons } from '../ServiceButtons/ServiceButtons'
import movieIcon from '../../assets/logos/clapperboard.png'
import './Form.css'

const Form = ({ view }) => {
    const dispatch = useDispatch();
    const login = () => {
        dispatch(setViewAction('movies'));
    }
    return (
        <form className='Form-container'>
            {view === 'register' ?
                <p>Registrate</p>
                : <p>Ingresa</p>}
            <ServiceButtons />
            <div className="Form-inputs">
                {view === 'register' ?
                    <React.Fragment>
                        <input id='name' type="text" placeholder='Nombre' />
                        <input id='lastName' type="text" placeholder='Apellido' />
                    </React.Fragment>
                    :
                    null}
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