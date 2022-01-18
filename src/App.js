import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviesContextProvider from './contexts/MoviesContext';
import MovieContextProvider from './contexts/MovieContext';
import MoviesResults from "./components/MoviesResults";
import MovieDetails from "./components/MovieDetails";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import NotFound from './components/NotFound';


const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>

      <Route exact path="/">
        <MoviesContextProvider>
          <MoviesResults />
        </MoviesContextProvider>
      </Route>

      <Route exact path="/movie/detail/:movie_id">
        <MovieContextProvider>
          <MovieDetails />
        </MovieContextProvider>
      </Route>

      <Route component={NotFound} />

    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
