import { applyMiddleware, combineReducers, createStore } from 'redux';
import appReducer from './appReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
