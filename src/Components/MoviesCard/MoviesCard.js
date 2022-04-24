import React from "react";
import { useHistory } from "react-router-dom";
import { BOOKMARKS_HANDLER } from "../../Utils/middlewares";
import { IMAGE_URL } from "../../Utils/constants";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./MoviesCard.scss";

export default function MoviesCard({
  movie,
  genres,
  isInBookmarks,
  isLoading,
  setBookmarks,
  bookmarks,
}) {
  const history = useHistory();

  const handleNavigation = (id) => {
    history.push(`/${id}`);
  };

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
    <div
      className="card"
      key={movie.id}
      onClick={() => handleNavigation(movie.id)}
    >
      <img
        src={
          movie.backdrop_path === null
            ? "https://www.meme-arsenal.com/memes/cd9a4520be8803422b428d42087d2b6c.jpg"
            : `${IMAGE_URL}${movie.poster_path}`
        }
        alt={movie.title}
      />

      <div className="info">
        <h4 className="title">{movie.title}</h4>
        <div className="bottom-block">
          <div className="genres">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              movie.genre_ids.map((genre) => {
                const gen = genres.find((g) => g.id === genre);
                return (
                  <div className="genres-item" key={genre}>
                    {gen.name ? gen.name : ""}
                  </div>
                );
              })
            )}
          </div>
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
      </div>
    </div>
  );
}
