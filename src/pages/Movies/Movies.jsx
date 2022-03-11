import React from 'react'
import { FilterButtons } from '../../components/FilterButtons/FilterButtons'
import { MovieList } from '../../containers/MovieList/MovieList'

const Movies = () => {
    return (
        <div className="Movies-container">
            <FilterButtons />
            <MovieList />
        </div>
    )
}

export { Movies }