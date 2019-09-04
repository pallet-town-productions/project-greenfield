function currentSizeIndex(currentSizeIdx = 0, action) {
  switch (action.type) {
    case 'CHANGE_SIZE':
      return action.currentSizeIndex;
    default:
      return currentSizeIdx;
  }
}

function currentQuantity(currentQty = 1, action) {
  switch (action.type) {
    case 'CHANGE_QUANTITY':
      return action.currentQuantity;
    default:
      return currentQty;
  }
}

function showQuantities(show = false, action) {
  switch (action.type) {
    case 'TOGGLE_SHOW_QUANTITIES':
      return action.showQuantities;
    default:
      return show;
  }
}

function promptSelectSize(show = false, action) {
  switch (action.type) {
    case 'PROMPT_SELECT_SIZE':
      return action.promptSelectSize;
    default:
      return show;
  }
}

function currentCart(cart = [], action) {
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
