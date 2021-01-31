import { combineReducers, createStore } from "redux";
import newsReducer from "./newsReducer";

let reducers = combineReducers({
    newsReducer: newsReducer
})

let store = createStore(reducers);

export default store