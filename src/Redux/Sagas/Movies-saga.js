import { call, put, takeLatest } from "redux-saga/effects";
import { API } from "../../API/API";
import types from "../Types/Movies-types";

function* getMoviesSaga({ payload }) {
  try {
    const { data } = yield call(API.getPopularMovies, payload);

    yield put({
      type: types.GET_MOVIES_SUCCESS,
      payload: {
        movies: data.results,
        page: data.page,
        totalPages: data.total_pages,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

function* getMovie({ payload: { id, history } }) {
  try {
    const { data } = yield call(API.getMovie, id);

    yield put({
      type: types.GET_MOVIE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    if (err.response.status === 404) history.push("/404");
  }
}

function* getSimilarMovies({ payload }) {
  try {
    const { data } = yield call(API.getSimilarMovies, payload);

    yield put({
      type: types.GET_SIMILAR_MOVIES_SUCCESS,
      payload: {
        movies: data.results,
        page: data.page,
        totalPages: data.total_pages,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

function* getGenresSaga() {
  try {
    const { data } = yield call(API.getGenres);
    yield put({
      type: types.GET_GENRES_SUCCESS,
      payload: data.genres,
    });
  } catch (err) {
    console.log(err);
  }
}

function* searchMoviesSaga({ payload }) {
  try {
    const { data } = yield call(API.searchMovieByInput, payload);

    yield put({
      type: types.SEARCH_MOVIES_SUCCESS,
      payload: {
        movies: data.results,
        page: data.page,
        totalPages: data.total_pages,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export function* moviesSaga() {
  yield takeLatest(types.GET_MOVIES, getMoviesSaga);
  yield takeLatest(types.SEARCH_MOVIES, searchMoviesSaga);
  yield takeLatest(types.GET_MOVIE, getMovie);
  yield takeLatest(types.GET_SIMILAR_MOVIES, getSimilarMovies);
  yield takeLatest(types.GET_GENRES, getGenresSaga);
}
