import React from "react";
import { IMAGE_URL } from "../../Utils/constants";
import {
  dateNormalizer,
  convertMinutsToHours,
  BOOKMARKS_HANDLER,
} from "../../Utils/middlewares";
import AdditionalMenu from "../AdditionalMenu/AdditionalMenu";
import "./MovieCard.scss";

export default function MovieCard({
  movie,
  movies,
  isInBookmarks,
  bookmarks,
  setBookmarks,
  isLoading,
}) {
  const handleBookmarks = (e, movie, isInBookmarks) => {
    e.stopPropagation();

    if (isInBookmarks)
      return BOOKMARKS_HANDLER.removeFromBookmarks(
        movie.id,
        bookmarks,
        setBookmarks
      );

    return BOOKMARKS_HANDLER.addToBookmarks(bookmarks, movie, setBookmarks);
  };

  return (
    <div className="row-wrapper">
      <img
        src={
          movie.backdrop_path === null
            ? "https://www.meme-arsenal.com/memes/cd9a4520be8803422b428d42087d2b6c.jpg"
            : IMAGE_URL + movie.backdrop_path
        }
        alt={movie.title}
      />

      <div className="column-info">
        <div className="top-info">
          <h1>{movie.original_title}</h1>
          <p>{movie.tagline}</p>
          <div
            className="bookmarks"
            style={{
              backgroundColor: isInBookmarks ? "#e46464" : "",
            }}
            onClick={(e) => handleBookmarks(e, movie, isInBookmarks)}
          >
            {isInBookmarks ? "Remove from Bookmarks" : "Add To Bookmarks"}
          </div>
        </div>

        <div className="main-info">
          <h1>About</h1>
          <div className="row">
            <p>Year:</p>
            <p>{dateNormalizer(movie.release_date)}</p>
          </div>
          {movie.genres ? (
            <div className="row gen">
              <p>Genre:</p>
              <div className="genres">
                {movie.genres.map(({ id, name }) => (
                  <p key={id} className="genre-item">
                    {name}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="row">
            <p>Budget:</p>
            <p>{`$${movie.budget}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
          </div>
          <div className="row">
            <p>Revenue:</p>
            <p>{`$${movie.revenue}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
          </div>
          <div className="row">
            <p>Runtime:</p>
            <p>{`0${convertMinutsToHours(movie.runtime)}`}</p>
          </div>
        </div>
      </div>
      <AdditionalMenu movie={movie} movies={movies} isLoading={isLoading} />
    </div>
  );
}
