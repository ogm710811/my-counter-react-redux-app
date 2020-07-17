import * as actionTypes from "../store/actions";

const initialState = {
  counter: 0,
  storeResult: [],
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
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        storeResult: state.storeResult.concat({
          id: new Date(),
          value: state.counter,
        }),
      };
    case actionTypes.DELETE_RESULT:
      // different ways of updating arrays immutably :
      // 1. using Array.splice:
      // const newStoreResultArray = [...state.storeResult];
      // newStoreResultArray.splice(action.payload, 1);
      // return {
      //   ...state,
      //   storeResult: newStoreResultArray,
      // };

      // 1. using Array.filter:
      const newStoreResultArray = state.storeResult.filter(
        (r) => r.id !== action.payload
      );
      console.log("newStoreResultArray ID :: ", action.payload);
      console.log("newStoreResultArray :: ", newStoreResultArray);
      return {
        ...state,
        storeResult: newStoreResultArray,
      };
    default:
      return state;
  }
};

export default reducer;
