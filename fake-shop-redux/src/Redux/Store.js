import {configureStore } from "redux";
import reducers from "./Reducers/index";

const store = configureStore(reducers, {});

export default store;
