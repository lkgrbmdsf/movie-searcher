import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../Components/Header/Header";
import MoviesPage from "../Pages/MoviesPage/MoviesPage";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import BookmarksPage from "../Pages/BookmarksPage/BookmarksPage";
import MovieRouter from "./Movie-Router";

export default function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/404" component={PageNotFound} exact />

        <Route path="/" component={MoviesPage} exact />

        <Route path="/bookmarks" component={BookmarksPage} exact />

        <Route path="/:id" component={MovieRouter} exact />

        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </>
  );
}
