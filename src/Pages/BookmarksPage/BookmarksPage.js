import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IMAGE_URL } from "../../Utils/constants";
import { BOOKMARKS_HANDLER } from "../../Utils/middlewares";
import "./BookmarksPage.scss";

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || []
  );

  const history = useHistory();

  const handleNavigation = (id) => {
    history.push(`/${id}`);
  };

  if (!bookmarks.length)
    return <h1 className="no-info">Wops! there's no any</h1>;
  return (
    <main className="main">
      <div className="bookmarks-list">
        {bookmarks.map((movie) => (
          <div
            className="movie"
            key={movie.id}
            onClick={() => handleNavigation(movie.id)}
          >
            <div className="img-container">
              <img
                src={
                  movie.backdrop_path === null
                    ? "https://www.meme-arsenal.com/memes/cd9a4520be8803422b428d42087d2b6c.jpg"
                    : IMAGE_URL + movie.backdrop_path
                }
                alt={movie.title}
              />
            </div>

            <div className="info-wrapper">
              <p>{movie.title}</p>
              <div className="icon">
                <BookmarkRemoveIcon
                  style={{
                    color: "#e46464",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    BOOKMARKS_HANDLER.removeFromBookmarks(
                      movie.id,
                      bookmarks,
                      setBookmarks
                    );
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
