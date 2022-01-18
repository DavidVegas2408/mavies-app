import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import MovieVideo from './MovieVideo';
import MovieCompanies from './MovieCompanies';
import MovieGenres from './MovieGenres';


const MovieInfo = ({ movie, movieTranslations, movieTrailers }) => {
    const urlMovie = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className='movie-detail-container'>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={12} sm={6}>
                    <div className='image-movie-container'><img src={urlMovie} alt={movie.title} /></div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography gutterBottom variant="h4" component="h1">
                        {movie.title}
                    </Typography>
                    <MovieGenres movie={movie} />
                    <Typography variant="body2" color="textSecondary" component="p">
                        {movieTranslations.overview}
                    </Typography>
                    <br />
                    {
                        movie.homepage !== ""
                            ? (<Button variant="contained" color="primary" href={movie.homepage}>
                                Visita el Sitio Oficial
                            </Button>)
                            : ""
                    }

                    <br /><br />
                    <Typography gutterBottom variant="h6" component="p">
                        Producido por:
                    </Typography>
                    <MovieCompanies movie={movie} />
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={3}>
                <MovieVideo movieTrailers={movieTrailers} />
            </Grid>
        </div >
    )
}

export default MovieInfo
