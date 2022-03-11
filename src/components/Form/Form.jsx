import React from 'react'
import movieIcon from '../../assets/logos/clapperboard.png'
import { ServiceButtons } from '../ServiceButtons/ServiceButtons'
import './Form.css'

const Form = ({ view }) => {
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
            <figure className="Movie-logo">
                <img src={movieIcon} alt="Logo" />
            </figure>
        </form>
    )
}

export { Form }