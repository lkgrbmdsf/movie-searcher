import React from "react";
import { useHistory } from "react-router-dom";

import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

import "./Header.scss";

export default function Header() {
  const history = useHistory();

  const handleNavigation = (string) => {
    history.push(string);
  };

  return (
    <>
      <header className="header">
        <div className="row">
          <div className="logo" onClick={() => handleNavigation("/")}>
            MOVIE SEARCHER
          </div>
          <div
            className="bookmarks"
            onClick={() => handleNavigation("/bookmarks")}
          >
            <BookmarkBorderOutlinedIcon
              sx={{ width: "30px", height: "30px" }}
            />
          </div>
        </div>
      </header>
    </>
  );
}
