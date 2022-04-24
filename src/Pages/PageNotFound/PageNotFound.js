import React from "react";
import { useHistory } from "react-router-dom";
import "./PageNotFound.scss";

export default function PageNotFound() {
  const history = useHistory();

  const handleNavigation = () => {
    history.push("/");
  };

  return (
    <div className="main">
      <h1 className="back" onClick={handleNavigation}>
        Go back to main
      </h1>
    </div>
  );
}
