import React, { Fragment, useContext } from 'react';
import { MovieContext } from "./../../contexts/MovieContext";
import MovieInfo from './MovieInfo';

const MovieDetails = () => {
    const { doneFetchMovie, movie, movieTranslations, movieTrailers } = useContext(MovieContext)
    return (
        <Fragment>
            {
                doneFetchMovie ?
                    (Object.entries(movie).length ? <MovieInfo movie={movie} movieTranslations={movieTranslations} movieTrailers={movieTrailers} /> : "Sin resultado")
                    : "Cargando....."
            }
        </Fragment>
    )
}

export default MovieDetails
