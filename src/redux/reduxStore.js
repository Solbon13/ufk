import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import newsReducer from "./newsReducer";

let reducers = combineReducers({
    news: newsReducer,
    auth: authReducer
})

let store = createStore(reducers);

window.store = store;

export default store