import React, { useState } from 'react'
import { FilterButtons } from '../../components/FilterButtons/FilterButtons'
import { MovieList } from '../../containers/MovieList/MovieList'

const Movies = () => {
    const [page, setPage] = useState(1);
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="Movies-container">
            <FilterButtons
                setPage={setPage}
                setInputValue={setInputValue} />
            <MovieList
                page={page}
                setPage={setPage}
                inputValue={inputValue}
                setInputValue={setInputValue} />
        </div>
    )
}

export { Movies }