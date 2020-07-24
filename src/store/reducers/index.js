import * as fromCounterReducer from "./counter.reducer";
import * as fromResultReducer from "./result.reducer";

export const reducers = {
  counterReducer: fromCounterReducer.reducer,
  resultReducer: fromResultReducer.reducer,
};
