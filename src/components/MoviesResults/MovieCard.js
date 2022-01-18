import React from 'react'
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from "react-router-dom";


const MovieCard = ({ id, title, urlMovie, release_date }) => (
    <Grid item xs={6} sm={3}>
        <div className='movie-card'>
            <Link className="buttonPrimary" to={`/movie/detail/${id}`}>
                <img src={urlMovie} alt={title} spacing={2} />
                <Typography gutterBottom variant="h6" component="h3">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {release_date}
                </Typography>
            </Link>
        </div>
    </Grid>
);

export default MovieCard
