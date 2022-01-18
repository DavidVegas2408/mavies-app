import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import MovieCard from './MovieCard';

const MovieSearchResult = ({ movies }) => (
    <Fragment>
        <div className='grid-movie'>
            <Grid container justify="center" spacing={3}>
                {
                    movies.map(movie => {

                        const {
                            id,
                            title,
                            poster_path,
                            release_date
                        } = movie;

                        const urlMovie = "https://image.tmdb.org/t/p/w500" + poster_path;

                        return (
                            <MovieCard
                                key={id}
                                id={id}
                                title={title}
                                urlMovie={urlMovie}
                                release_date={release_date}
                            />
                        );
                    })
                }
            </Grid>
        </div>
    </Fragment>
);

export default MovieSearchResult
