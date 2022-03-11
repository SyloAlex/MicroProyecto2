import React from 'react'
import { Form } from '../../components/Form/Form'
import moviePoster from '../../assets/images/image-gray.jpeg'
import './Login.css'
import { useSelector } from 'react-redux'

const Login = () => {
    const view = useSelector(state => state.view)
    return (
        <div className="Login-container">
            <figure className="Login-image">
                <img src={moviePoster} alt="Movie Poster" />
            </figure>
            <Form view={view} />
        </div>
    )
}

export { Login }