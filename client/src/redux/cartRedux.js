// Selectors
export const getCart = (state) => state.cart;
export const getCartById = (state, id) =>
  state.cart.find((cart) => cart.id === id);

// Actions
const createActionName = (actionName) => `app/cart/${actionName}`;
const ADD_CART = createActionName('ADD_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

// Action creators
export const addCart = (payload) => ({
  type: ADD_CART,
  payload,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

// Reducer
const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { productId } = action.payload;
      const existingCartItem = state.find((cart) => cart.productId === productId);

      if (!existingCartItem) {
        return [...state, action.payload];
      }

      return state;
    case REMOVE_FROM_CART:
      const updatedCart = state.filter((cart) => cart.productId !== action.payload);
      return updatedCart;
    default:
      return state;
  }
};

export default cartReducer;
