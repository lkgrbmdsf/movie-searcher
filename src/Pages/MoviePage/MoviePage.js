import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMovie, getSimilarMovies } from "../../Redux/Actions/Movies-actions";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import "./MoviePage.scss";
import MovieCard from "../../Components/MovieCard/MovieCard";

export default function MoviePage({ id }) {
  const dispatch = useDispatch();
  const { movie, movies, isLoading } = useSelector(
    (state) => state.moviesReducer
  );
  const history = useHistory();

  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || []
  );

  useEffect(() => {
    dispatch(getMovie({ id, history }));
    dispatch(getSimilarMovies({ id, currentPage: 1 }));
  }, [dispatch, id, history]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const isInBookmarks = Boolean(
    bookmarks.find((bookmark) => bookmark.id === movie.id)
  );

  return (
    <main className="main">
      <MovieCard
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        isInBookmarks={isInBookmarks}
        movie={movie}
        isLoading={isLoading}
        movies={movies}
      />
    </main>
  );
}
