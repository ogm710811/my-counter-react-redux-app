import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { reducers } from "./store/reducers/index";

// logger middleware
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};
const rootReducer = combineReducers({
  counterReducer: reducers.counterReducer,
  resultReducer: reducers.resultReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
