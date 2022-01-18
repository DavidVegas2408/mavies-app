const base_url_movie = "https://api.themoviedb.org/3/movie/";
const api_key = "caa999bfa9baa3ffa5d80d9f42e245a0";
const lenguage = "es-MX";
const include_adult = "false";


// endpoint - API
export const getMovieDetails = movieId => `${base_url_movie}${movieId}?api_key=${api_key}&language=${lenguage}`;

export const getMovieVariations = (query, page) => `${base_url_movie}${query}?api_key=${api_key}&language=${lenguage}&page=${page}`;

export const getMovieSearch = (query, page) => `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=${lenguage}&query=${query}&page=${page}&include_adult=${include_adult}`;

export const getMovieTranslations = movieId => `${base_url_movie}${movieId}/translations?api_key=${api_key}`;

export const getMovieTrailers = movieId => `${base_url_movie}${movieId}/videos?api_key=${api_key}&language=${lenguage}`;