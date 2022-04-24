import React from "react";
import ReactDOM from "react-dom/client";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootReducer } from "./Redux/Reducers/Root-reducer";
import rootSaga from "./Redux/Sagas/Root-saga";
import App from "./Pages/App/App";
import "./index.scss";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
