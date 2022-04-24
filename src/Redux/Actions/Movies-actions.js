import { actionFactory } from "../action-factory";
import types from "../Types/Movies-types";

export const getMovies = actionFactory(types.GET_MOVIES);

export const getMovie = actionFactory(types.GET_MOVIE);

export const getSimilarMovies = actionFactory(types.GET_SIMILAR_MOVIES);

export const searchMovies = actionFactory(types.SEARCH_MOVIES);

export const getGenres = actionFactory(types.GET_GENRES);
