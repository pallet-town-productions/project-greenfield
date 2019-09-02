import { getProductData, getStyleData } from '../util/util';

const setProductAction = function (productId) {
  return {
    type: 'setProductId',
    productId,
  };
};

const setProductDataActionKickoff = function (productId) {
  return (dispatch) => {
    getProductData(productId)
    .then((response) => {
      return response.json();
    })
    .then((responseJSON) => {
      dispatch(setProductDataActionSuccess(responseJSON));
    })
    .catch((err) => {
      dispatch(setProductDataActionFailure(err));
    });
  };
};

const setProductDataActionSuccess = function (productData) {
  return {
    type: 'SET_PRODUCT_DATA_SUCCESS',
    productData,
  };
};

const setProductDataActionFailure = function (err) {
  console.error(err);
  return {
    type: 'SET_PRODUCT_DATA_FAILURE',
  };
};

const setStyleDataActionKickoff = function (productId) {
  return (dispatch) => {
    getStyleData(productId)
    .then((response) => {
      return response.json();
    })
    .then((responseJSON) => {
      if (responseJSON.product_id !== undefined) {
        dispatch(setStyleDataActionSuccess(responseJSON));
      }
    })
    .catch((err) => {
      dispatch(setStyleDataActionFailure(err));
    });
  };
};

const setStyleDataActionSuccess = function (styleData) {
  return {
    type: 'SET_STYLE_DATA_SUCCESS',
    styleData,
  };
};

const setStyleDataActionFailure = function (err) {
  console.error(err);
  return {
    type: 'SET_STYLE_DATA_FAILURE',
  };
};

export {
  setProductAction,
  setProductDataActionKickoff,
  setStyleDataActionKickoff,
};
