import React, { Fragment, useContext } from 'react';
import { MoviesContext } from "./../../contexts/MoviesContext";
import MovieSearchResult from './MovieSearchResult';
import SearchMovies from './SearchMovies';

const MoviesResults = () => {
    const { doneFetch, movies, validateSearchMovies } = useContext(MoviesContext)
    return (
        <Fragment>
            <SearchMovies validateSearchMovies={validateSearchMovies} />
            {
                doneFetch ?
                    (movies.length ? <MovieSearchResult movies={movies} /> : "Sin resultado")
                    : "Cargando....."
            }
        </Fragment>
    )
}

export default MoviesResults
