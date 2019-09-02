const setProductAction = function (productId) {
  return {
    type: 'setProductId', 
    productId, 
  };
};

const setProductDataAction = function (productData) {
  return {
    type: 'SET_PRODUCT_DATA',
    productData,
  };
};

const setStyleDataAction = function (styleData) {
  return {
    type: 'SET_STYLE_DATA',
    styleData,
  };
};

export {
  setProductAction,
  setProductDataAction,
  setStyleDataAction,
};
  
