import React from "react";
import { useParams, withRouter } from "react-router-dom";
import MoviePage from "../Pages/MoviePage/MoviePage";
import MoviesPage from "../Pages/MoviesPage/MoviesPage";

function MovieRouter() {
  const { id } = useParams();

  if (id) return <MoviePage id={id} />;
  return <MoviesPage />;
}

export default withRouter(MovieRouter);
