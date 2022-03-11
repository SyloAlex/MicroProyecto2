import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateView } from '../../utils/utils'
import './Navbar.css'

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <nav className='Navbar-container'>
            <ul className="Navbar-list">
                <Link to={'/'}><li
                    onClick={() => updateView({ prop: dispatch, view: 'login' })}
                    className="Navbar-element">Login</li></Link>
                <Link to={'/register'}><li
                    onClick={() => updateView({ prop: dispatch, view: 'register' })}
                    className="Navbar-element">Register</li></Link>
            </ul>
        </nav>
    )
}

export { Navbar }