import axios from "axios";
import { API_CONSTS } from "../Utils/constants";

const apiClient = axios.create({
  baseURL: API_CONSTS.BASE_URL,
});

export const API = {
  getPopularMovies: (page) =>
    apiClient.get(`/movie/popular?${API_CONSTS.API_KEY}&page=${page}`),
  getMovie: (id) => apiClient.get(`/movie/${id}?${API_CONSTS.API_KEY}`),
  getSimilarMovies: ({ id, currentPage }) =>
    apiClient.get(
      `/movie/${id}/similar?${API_CONSTS.API_KEY}&page=${currentPage}`
    ),
  getGenres: () => apiClient.get(`/genre/movie/list?${API_CONSTS.API_KEY}`),
  searchMovieByInput: ({ currentPage, searchValue }) =>
    apiClient.get(
      `/search/movie?${API_CONSTS.API_KEY}&page=${currentPage}&query=${searchValue}`
    ),
};
