import { all } from "redux-saga/effects";
import { moviesSaga } from "./Movies-saga";

export default function* rootSaga() {
  yield all([moviesSaga()]);
}
