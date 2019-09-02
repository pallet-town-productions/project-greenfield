import exampleProductData from '../exampleProductData';
import exampleStyleData from '../exampleStyleData';

const productId = function (state = { productId: 1 }, action) {
  switch (action.type) {
    case 'setProductId':
      return action.productId;
    default:
      return state;
  }
};

const productData = function (productData = exampleProductData, action) {
  switch (action.type) {
    case 'SET_PRODUCT_DATA':
      return action.productData;
    default:
      return productData;
  };
};

const style = function (styleData = exampleStyleData, action) {
  switch (action.type) {
    case 'SET_STYLE_DATA':
      return action.styleData;
    default:
      return styleData;
  };
};

export {
  productId,
  productData,
  style,
};
