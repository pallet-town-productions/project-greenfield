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

const productData = function (products = exampleProductData, action) {
  // console.log('PRODUCTDATA ORJECT', action.productData);
  switch (action.type) {
    case 'SET_PRODUCT_DATA_SUCCESS':
      return action.productData;
    default:
      return products;
  }
};

const styleData = function (styles = exampleStyleData, action) {
  // console.log('STYLEDATA OBJECT', action.styleData);
  switch (action.type) {
    case 'SET_STYLE_DATA_SUCCESS':
      return action.styleData;
    default:
      return styles;
  }
};

export {
  productId,
  productData,
  styleData,
};
