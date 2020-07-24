import { Action } from "redux";

export const INC_COUNTER = "Increment Counter";
export const DEC_COUNTER = "Decrement Counter";
export const ADD_COUNTER = "Add Counter";
export const SUBTRACT_COUNTER = "Subtract Counter";

export const incCounter: Action = () => {
  return {
    type: INC_COUNTER,
  };
};

export const decCounter: Action = () => {
  return {
    type: DEC_COUNTER,
  };
};

export const addCounter: Action = (value) => {
  return {
    type: ADD_COUNTER,
    payload: value,
  };
};

export const subtractCounter: Action = (value) => {
  return {
    type: SUBTRACT_COUNTER,
    payload: value,
  };
};
