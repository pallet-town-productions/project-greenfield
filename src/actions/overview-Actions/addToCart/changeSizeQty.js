const changeSize = function (sizeIndex = 0) {
  // by default,
  // size is "Select Size"
  // sku is -1
  // index is 0
  return {
    type: 'CHANGE_SIZE',
    currentSizeIndex: sizeIndex,
  };
};

const changeQuantity = function (quantity = 1) {
  // by default,
  // quantity is "-" if size isn't selected (see above)
  // quantity is 1 if size is selected
  return {
    type: 'CHANGE_QUANTITY',
    currentQuantity: quantity,
  };
};

const toggleShowQuantities = function (show) {
  return {
    type: 'TOGGLE_SHOW_QUANTITIES',
    showQuantities: show,
  };
};

const togglePromptSelectSize = function (show) {
  return {
    type: 'PROMPT_SELECT_SIZE',
    promptSelectSize: show,
  };
};

const addToCart = function (addedObject) {
  // should be Object of type:
  // productId: number
  // styleId: number
  // sizeId: number
  // qty: number
  // unitPrice: number
  return {
    type: 'ADD_TO_CART',
    added: addedObject,
  };
};

export {
  changeSize,
  changeQuantity,
  toggleShowQuantities,
  togglePromptSelectSize,
  addToCart,
};
