import { combineReducers } from 'redux';
import { style, currentStyleIndex } from './overview-Reducers/styleSelector/styleSelectorReducers';
import currentPhotoIndex from './overview-Reducers/imageGallery/currentPhotoReducers';
import productData from './overview-Reducers/productInformation/productDataReducers';
import productId from './reducer-test';
import relatedReducer from './related-Products-Reducers/related-products-reducer';
import updateReviews from './RnR-Reducers/RnR-reducer';

export default combineReducers({
  // eslint-disable-next-line max-len
  productId, relatedReducer, updateReviews, currentStyleIndex, style, currentPhotoIndex, productData,
});
