import { combineReducers } from 'redux';

import currentStyleIndex from './overview/styleSelector/currentStyle';
import style from './overview/styleSelector/styleList';
import currentPhotoIndex from './overview/imageGallery/currentPhoto';
import productId from './reducer-test';
import relatedReducer from './related-Products-Reducers/related-products-reducer';

export default combineReducers({
  productId, relatedReducer, currentStyleIndex, style, currentPhotoIndex,
});
