import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import accountReducer from "../reducers/accountReducer";

const store = createStore(accountReducer, applyMiddleware(thunk));

export default store;