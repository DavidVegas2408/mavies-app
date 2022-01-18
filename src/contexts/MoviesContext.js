import React, { createContext, useEffect, useState } from 'react';
import { getMovieVariations, getMovieSearch } from "./../constanst";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
    const [doneFetch, setDoneFetch] = useState();
    const [movies, setMovies] = useState([]);
    const [currentSearch, setCurrentSearch] = useState("");
    const [pageAct, setpageAct] = useState(1);
    const [pagesTotal, setPagesTotal] = useState();
    const [typeTerm, setTypeTerm] = useState("popular")

    useEffect(() => {
        getMoviesWithVariations(typeTerm, pageAct);
    }, [])

    const getMoviesWithVariations = (term, pag) => {
        fetch(getMovieVariations(term, pag))
            .then(res => res.json())
            .then(data => {
                setPagesTotal(data.total_pages)
                setDoneFetch(true);
                setMovies(data.results);
            })
            .catch(err => console.log(err));
    }

    const getMoviesSearch = (termSearch, pagSearch) => {
        fetch(getMovieSearch(termSearch, pagSearch))
            .then(res => res.json())
            .then(data => {
                setDoneFetch(true);
                setMovies(data.results);
            })
            .catch(err => console.log(err));
    }

    const validateSearchMovies = (
        e,
        term_search = document.querySelector("#search_movies").value.toLowerCase().trim()
    ) => {
        if (e.type === "keypress" && e.key !== "Enter") return;
        const words = term_search.match(/\w+/g);
        term_search = words && words.join(" ");
        if (term_search && term_search !== currentSearch) {
            setCurrentSearch(term_search);
            setDoneFetch(false);
            getMoviesSearch(term_search, 1);
        }
    };

    return (
        <MoviesContext.Provider value={{ doneFetch, movies, validateSearchMovies, pageAct, typeTerm }}>
            {children}
        </MoviesContext.Provider>
    )
}

export default MoviesContextProvider
