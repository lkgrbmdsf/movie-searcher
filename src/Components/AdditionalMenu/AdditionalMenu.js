import React from "react";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { IMAGE_URL } from "../../Utils/constants";
import "./AdditionalMenu.scss";

export default function AdditionalMenu({ movie, movies, isLoading }) {
  const history = useHistory();

  const handleNavigation = (id) => {
    history.push(`/${id}`);
  };

  return (
    <div className="adds">
      <div className="ratings">
        <div className="numeric-ratings">
          <h1
            style={{
              color: movie.vote_average > 5 ? "#1be21b" : "lightsteelblue",
            }}
          >
            {movie.vote_average}
          </h1>
          <div>
            <div className="row">
              <p>{movie.vote_count}</p>
              <p>Total votes</p>
            </div>
          </div>
        </div>
        <div className="progress-bar">
          <div
            className="average"
            style={{ width: `${movie.vote_average * 10}%` }}
          />
        </div>
      </div>
      <div className="similar-menu">
        <h3>Similar Movies</h3>
        <div className="similar-bar">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            movies.map((rec) => (
              <div
                className="img-container"
                key={rec.id}
                onClick={() => {
                  handleNavigation(rec.id);
                }}
              >
                <img
                  src={
                    rec.poster_path === null
                      ? "https://www.meme-arsenal.com/memes/cd9a4520be8803422b428d42087d2b6c.jpg"
                      : IMAGE_URL + rec.poster_path
                  }
                  alt={rec.title}
                ></img>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
