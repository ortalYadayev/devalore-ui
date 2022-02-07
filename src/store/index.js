import { createStore } from 'redux';
import petReducer from "./reducers/petReducer";

const store = createStore(petReducer);

export default store;