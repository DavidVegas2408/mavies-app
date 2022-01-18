import React from 'react'

const MovieGenres = ({ movie }) => (
    movie.genres.map(genre => {
        return (
            <span className='subtitle' key={genre.id}>{genre.name}</span>
        )
    })
);

export default MovieGenres
