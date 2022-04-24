import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../../Router/Routes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}
