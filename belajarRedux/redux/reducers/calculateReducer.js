import { useSelector } from "react-redux";

const initialState = {
  number: 0,
};

const calculateReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INCREMENT":
      return { ...state, number: state.number + payload };

    default:
      return state;
  }
};

export const useSelectCalculate = () => useSelector((state) => state.calculate);
export default calculateReducers;
