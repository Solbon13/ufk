import { combineReducers, createStore } from "redux";
import newsReducer from "./newsReducer";

let reducers = combineReducers({
    news: newsReducer,
})

let store = createStore(reducers);

window.store = store;

export default store