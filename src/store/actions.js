import { Action } from "redux";

export const INC_COUNTER = "Increment Counter";
export const DEC_COUNTER = "Decrement Counter";
export const ADD_COUNTER = "Add Counter";
export const SUBTRACT_COUNTER = "Subtract Counter";
export const STORE_RESULT = "Store Result";
export const DELETE_RESULT = "Delete Result";

export const IncCounter: Action = () => {
  return {
    type: INC_COUNTER,
  };
};

export const DecCounter: Action = () => {
  return {
    type: DEC_COUNTER,
  };
};

export const AddCounter: Action = (value) => {
  return {
    type: ADD_COUNTER,
    payload: value,
  };
};

export const SubtractCounter: Action = (value) => {
  return {
    type: SUBTRACT_COUNTER,
    payload: value,
  };
};

export const StoreResult: Action = (counterResult) => {
  return {
    type: STORE_RESULT,
    payload: counterResult,
  };
};

export const DeleteResult: Action = (id) => {
  return {
    type: DELETE_RESULT,
    payload: id,
  };
};
