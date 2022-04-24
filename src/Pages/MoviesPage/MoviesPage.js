import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getGenres,
  getMovies,
  searchMovies,
} from "../../Redux/Actions/Movies-actions";
import MoviesCard from "../../Components/MoviesCard/MoviesCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Pagination from "../../Components/Pagination/Pagination";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import "./MoviesPage.scss";

export default function MoviesPage() {
  const dispatch = useDispatch();
  const { movies, totalPages, genres, isLoading } = useSelector(
    (state) => state.moviesReducer
  );

  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setPage] = useState(1);
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || []
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchValue.trim()) {
        dispatch(searchMovies({ currentPage, searchValue }));
        return;
      }
      dispatch(getGenres());
      dispatch(getMovies(currentPage));
    }, 400);
    return () => clearTimeout(delayDebounceFn);
  }, [searchValue, currentPage, dispatch]);

  return (
    <main className="main">
      <SearchBar value={searchValue} setValue={setSearchValue} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="card-list">
          {movies.map((movie) => {
            const isInBookmarks = Boolean(
              bookmarks.find((bookmark) => bookmark.id === movie.id)
            );

            return (
              <MoviesCard
                key={movie.id}
                movie={movie}
                genres={genres}
                isInBookmarks={isInBookmarks}
                isLoading={isLoading}
                bookmarks={bookmarks}
                setBookmarks={setBookmarks}
              />
            );
          })}
        </div>
      )}
      <Pagination
        totalPages={totalPages}
        setPage={setPage}
        currentPage={currentPage}
      />
    </main>
  );
}
