const currentSizeIndex = function (currentSizeIdx = 0, action) {
  switch (action.type) {
    case 'CHANGE_SIZE':
      return action.currentSizeIndex;
    default:
      return currentSizeIdx;
  }
};

const currentQuantity = function (currentQty = 1, action) {
  switch (action.type) {
    case 'CHANGE_QUANTITY':
      return action.currentQuantity;
    default:
      return currentQty;
  }
};

export {
  currentSizeIndex,
  currentQuantity,
};
