import { combineReducers } from 'redux';

// import currentStyleIndex from './overview-Reducers/styleSelector/currentStyle';
// import style from './overview-Reducers/styleSelector/styleList';
import { style, currentStyleIndex } from './overview-Reducers/styleSelector/styleSelectorReducers';
import currentPhotoIndex from './overview-Reducers/imageGallery/currentPhotoReducers';
import productData from './overview-Reducers/productInformation/productDataReducers';
import productId from './reducer-test';
import relatedReducer from './related-Products-Reducers/related-products-reducer';

export default combineReducers({
  productId, relatedReducer, currentStyleIndex, style, currentPhotoIndex, productData,
});
