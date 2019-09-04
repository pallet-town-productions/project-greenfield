// NOTE: THIS REDUCER DOESN'T YET HAVE AN ACTION: IT SIMPLY HAS A STORE KEY

function productDataReducer(productData = {}, action) {
  switch (action.type) {
    case 'CHANGE_PRODUCT':
      return action.productData;
    default:
      return productData;
  }
}

export default productDataReducer;
