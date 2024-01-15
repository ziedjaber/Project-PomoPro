// store.js

import { createStore } from "redux";
import rootReducer from "../Reducers/counterReducer";

const store = createStore(rootReducer);

export default store;
