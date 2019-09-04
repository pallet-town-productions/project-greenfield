import { getProductData, getStyleData } from '../util/util';

function setProductAction(productId) {
  return {
    type: 'setProductId',
    productId,
  };
}

function setProductDataActionSuccess(productData) {
  return {
    type: 'SET_PRODUCT_DATA_SUCCESS',
    productData,
  };
}

function setProductDataActionKickoff(productId) {
  return (dispatch) => {
    getProductData(productId)
      .then((response) => response.json())
      .then((responseJSON) => {
        dispatch(setProductDataActionSuccess(responseJSON));
      })
      .catch(() => { // this is the error handling block for failed get requests
        setProductDataActionKickoff(productId); // if get request fails, try again (recursively)
      });
  };
}

function setStyleDataActionSuccess(styleData) {
  return {
    type: 'SET_STYLE_DATA_SUCCESS',
    styleData,
  };
}

function setStyleDataActionKickoff(productId) {
  return (dispatch) => {
    getStyleData(productId)
      .then((response) => response.json())
      .then((responseJSON) => {
        if (responseJSON.product_id !== undefined) {
          dispatch(setStyleDataActionSuccess(responseJSON));
        }
      })
      .catch(() => { // this is the error handling block for failed get requests
        setStyleDataActionKickoff(productId); // if get request fails, try again (recursively)
      });
  };
}

export {
  setProductAction,
  setProductDataActionKickoff,
  setStyleDataActionKickoff,
};
