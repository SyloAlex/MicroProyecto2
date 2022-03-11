import React from 'react'
import { useDispatch } from 'react-redux'
import { setViewAction } from '../../redux/actions/actionCreators'
import './FilterButtons.css'

const FilterButtons = () => {
    const dispatch = useDispatch();
    const soonView = () => {
        dispatch(setViewAction('soon-movies'))
    }
    const searchView = () => {
        dispatch(setViewAction('search-movies'))
    }
    return (
        <div className="FilterButtons-container">
            <button onClick={soonView} className="FilterButtons-button Soon-button">Próximamente</button>
            <button onClick={searchView} className="FilterButtons-button Search-button">Buscar película</button>
        </div>
    )
}

export { FilterButtons }