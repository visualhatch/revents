import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER
} from "../constants/testConstants";

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  };
};
