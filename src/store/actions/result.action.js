import { Action } from "redux";

export const STORE_RESULT = "Store Result";
export const DELETE_RESULT = "Delete Result";

export const savedStoreResult: Action = (counterResult) => {
  return {
    type: STORE_RESULT,
    payload: counterResult,
  };
};
export const storeResult: Action = (counterResult) => {
  return (dispatch, getState) => {
    // this setTimeout simulates an API call
    // the result is passed to the dispatch function handled by redux-thunk
    // Redux-thunk passes 2 arguments: 2 functions => dispatch && getState
    setTimeout(() => {
      // although you can access the state here, if you need it, it's a nice utility function,
      // but, don't overuse it though. Try to write action creators and reducers in a way that don't have to use getState,
      // instead you can pass all the data you need in your async action creator by accepting it as an argument.
      const oldCounterResultState = getState().counterReducer.counter;
      console.log(
        "[Middleware - storeResult] before next state",
        oldCounterResultState
      );
      dispatch(savedStoreResult(counterResult));
    }, 2000);
  };
};

export const deleteResult: Action = (id) => {
  return {
    type: DELETE_RESULT,
    payload: id,
  };
};
