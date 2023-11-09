import { createStore } from "redux";
import { Reducer } from "./combineReducer"
const initialState = {};
const store = createStore(Reducer, initialState);

export default store;
