import { configureStore, combineReducers, createStore } from "redux";
import AuthReducers from './reducers';
const RootReducer = combineReducers({
  AuthReducers
});

export const store = createStore(RootReducer);
