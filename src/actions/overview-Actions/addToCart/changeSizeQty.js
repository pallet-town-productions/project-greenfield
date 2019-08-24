const changeSize = function (sizeIndex = 0) {
  // by default, 
    // size is "Select Size"
    // sku is -1
    // index is 0
  return {
    type: 'CHANGE_SIZE',
    currentSizeIndex: sizeIndex,
  }
};

const changeQuantity = function (quantity = 1) {
  // by default,
    // quantity is "-" if size isn't selected (see above)
    // quantity is 1 if size is selected
  return {
    type: 'CHANGE_QUANTITY',
    currentQuantity: quantity,
  }
};

export {
  changeSize,
  changeQuantity,
};
