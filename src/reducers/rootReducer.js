import { combineReducers } from 'redux';

import currentStyleIndex from './overview-Reducers/styleSelector/currentStyle';
import style from './overview-Reducers/styleSelector/styleList';
import currentPhotoIndex from './overview-Reducers/imageGallery/currentPhoto';
import productData from './overview-Reducers/productInformation/productData'
import productId from './reducer-test';
import relatedReducer from './related-Products-Reducers/related-products-reducer';

export default combineReducers({
  productId, relatedReducer, currentStyleIndex, style, currentPhotoIndex, productData,
});
