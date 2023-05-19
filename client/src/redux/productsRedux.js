//selectors

// actions
const createActionName = actionName => `app/products/${actionName}`;

// action creators
const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};
export default productsReducer;