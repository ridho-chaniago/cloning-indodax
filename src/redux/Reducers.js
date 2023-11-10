import { SET_LAST_PRICE } from "./ActionType";

const initialState = {
  lastPrice: [],
};

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LAST_PRICE:
      return {
        ...state,
        lastPrice: action.payload,
      };
    default:
      return state;
  }
};

export default priceReducer;
