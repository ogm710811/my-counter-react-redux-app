import * as actionTypes from "../../store/actions";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INC_COUNTER:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case actionTypes.SUBTRACT_COUNTER:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
