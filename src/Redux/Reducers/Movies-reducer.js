import types from "../Types/Movies-types";

const initialState = {
  movies: [],
  movie: {},
  genres: [],
  totalPages: 0,
  isLoading: false,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.movies,
        totalPages: action.payload.totalPages,
      };

    case types.GET_MOVIE:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movie: action.payload,
      };

    case types.GET_SIMILAR_MOVIES:
      return {
        ...state,
        isLoading: false,
      };

    case types.GET_SIMILAR_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.movies,
        totalPages: action.payload.totalPages,
      };
    case types.GET_GENRES:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_GENRES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        genres: action.payload,
      };

    case types.SEARCH_MOVIES:
      return {
        ...state,
        isLoading: true,
      };

    case types.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.movies,
        totalPages: action.payload.totalPages,
      };
    default:
      return state;
  }
}
