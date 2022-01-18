import React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchMovies = ({ validateSearchMovies }) => (
  <div className="container-search">
    <TextField
      id="search_movies"
      label="Buscador De Películas"
      margin="normal"
      variant="outlined"
      onKeyPress={(e) => validateSearchMovies(e)}
    />
    <IconButton onClick={(e) => validateSearchMovies(e)}>
      <SearchIcon />
    </IconButton>
  </div>
);

export default SearchMovies;