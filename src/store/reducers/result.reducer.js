import * as actionTypes from "../../store/actions";

const initialState = {
  storeResult: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // IMPORTANT To REMEMBER!!
    // inside reducer function, it basically has no access to the global state
    // only to the state of that reducer function, in this case storeResult: []
    // So if we are in a reducer where we need to get a value from the global state, in this case
    // we should simply get it as an action payload
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        storeResult: state.storeResult.concat({
          id: new Date(),
          value: action.payload,
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
      return {
        ...state,
        storeResult: newStoreResultArray,
      };
    default:
      return state;
  }
};

export default reducer;
