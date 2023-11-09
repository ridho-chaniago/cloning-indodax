import { combineReducers } from "redux";
import calculateReducers from "./reducers/calculateReducer";

export const Reducer = combineReducers({
    calculate:calculateReducers
})
