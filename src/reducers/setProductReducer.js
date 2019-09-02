
export default (state = { productId: 1 }, action) => {
  switch (action.type) {
    case 'setProductId':
      return action.productId;
    default:
      return state;
  }
};
