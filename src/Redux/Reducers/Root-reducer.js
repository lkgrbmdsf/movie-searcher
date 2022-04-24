import { combineReducers } from "redux";
import moviesReducer from "./Movies-reducer";

export const rootReducer = combineReducers({ moviesReducer });
