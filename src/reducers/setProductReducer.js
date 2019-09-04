import exampleProductData from '../exampleProductData';
import exampleStyleData from '../exampleStyleData';

function productId(state = { productId: 1 }, action) {
  switch (action.type) {
    case 'setProductId':
      return action.productId;
    default:
      return state;
  }
}

function productData(products = exampleProductData, action) {
  // console.log('PRODUCTDATA ORJECT', action.productData);
  switch (action.type) {
    case 'SET_PRODUCT_DATA_SUCCESS':
      return action.productData;
    default:
      return products;
  }
}

function styleData(styles = exampleStyleData, action) {
  // console.log('STYLEDATA OBJECT', action.styleData);
  switch (action.type) {
    case 'SET_STYLE_DATA_SUCCESS':
      return action.styleData;
    default:
      return styles;
  }
}

export {
  productId,
  productData,
  styleData,
};
