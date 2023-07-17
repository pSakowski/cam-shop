import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import productsReducer from './productsRedux';
import usersReducer from './usersRedux';
import cartReducer from './cartRedux';
import ordersReducer from './orderRedux';

const subreducers = {
  products: productsReducer,
  user: usersReducer,
  cart: cartReducer,
  orders: ordersReducer,
};

const reducer = combineReducers(subreducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
