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

const showQuantities = function (show = false, action) {
  switch (action.type) {
    case 'TOGGLE_SHOW_QUANTITIES':
      return action.showQuantities;
    default:
      return show;
  }
};

const promptSelectSize = function (show = false, action) {
  switch (action.type) {
    case 'PROMPT_SELECT_SIZE':
      return action.promptSelectSize;
    default:
      return show;
  }
};

const currentCart = function (cart = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      cart.push(action.added);
      return cart.slice();
    default:
      return cart;
  }
}

export {
  currentSizeIndex,
  currentQuantity,
  showQuantities,
  promptSelectSize,
  currentCart,
};
