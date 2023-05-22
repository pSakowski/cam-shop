import axios from 'axios';
import { API_URL } from "../config";

/* SELECTORS */
export const getProducts = (state) => state.products;
export const getProductsById = (state, id) =>
  state.products.find((product) => product.id === id);

/* ACTIONS */
const createActionName = (actionName) => `app/products/${actionName}`;
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

/* ACTION CREATORS */
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });
export const loadProducts = (payload) => ({ type: LOAD_PRODUCTS, payload });

/* THUNKS */
export const loadProductsRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}products`);
      let products = res.data;
      dispatch(loadProducts(products));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

/* REDUCER */
const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.payload];
    default:
      return statePart;
  }
};
export default productsReducer;
