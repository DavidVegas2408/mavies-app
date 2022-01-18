import React, { createContext, useEffect, useState } from 'react';
import { getMovieDetails, getMovieTranslations, getMovieTrailers } from "./../constanst";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
    const commonmovie_id = window.location.pathname.split("/")[3];

    const [doneFetchMovie, setDoneFetchMovie] = useState(false);
    const [movie, setMovie] = useState({});
    const [movieTranslations, setMovieTranslations] = useState({});
    const [movieTrailers, setMovieTrailers] = useState([]);

    useEffect(() => {
        getMovieData(commonmovie_id);
        getMovieDataTranslations(commonmovie_id);
        getMovieDataTrailers(commonmovie_id);
    }, [commonmovie_id])

    const getMovieData = commonmovie_id => {
        fetch(getMovieDetails(commonmovie_id))
            .then(res => res.json())
            .then(data => {
                setDoneFetchMovie(true);
                setMovie(data);
            })
            .catch(err => console.log(err));
    }

    const getMovieDataTranslations = commonmovie_id => {
        fetch(getMovieTranslations(commonmovie_id))
            .then(res => res.json())
            .then(data => {
                const newdata = data.translations;
                newdata.map(el => { if (el.iso_3166_1 === "MX") setMovieTranslations(el.data); })
            })
            .catch(err => console.log(err));
    }

    const getMovieDataTrailers = commonmovie_id => {
        fetch(getMovieTrailers(commonmovie_id))
            .then(res => res.json())
            .then(data => {
                setMovieTrailers(data.results);
            })
            .catch(err => console.log(err));
    }

    return (
        <MovieContext.Provider value={{ doneFetchMovie, movie, movieTranslations, movieTrailers}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider
