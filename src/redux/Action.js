import { SET_LAST_PRICE } from "./actionTypes";

export const setLastPrice = (lastPrice) => {
  return {
    type: SET_LAST_PRICE,
    payload: lastPrice,
  };
};
