import { combineReducers } from 'redux';
import { style, currentStyleIndex } from './overview-Reducers/styleSelector/styleSelectorReducers';
import {
  currentSizeIndex, currentQuantity, showQuantities, promptSelectSize,
} from './overview-Reducers/addToCart/addToCartReducers';
import { currentPhotoIndex, showExpandedView, showZoomView } from './overview-Reducers/imageGallery/imageGalleryReducers';
import productData from './overview-Reducers/productInformation/productDataReducers';
import productId from './reducer-test';
import relatedReducer from './related-Products-Reducers/related-products-reducer';
import { updateReviews, updateStarReviews, updateReviewNumber } from './RnR-Reducers/RnR-reducer';
import getMetaData from './RnR-Reducers/RnR-meta-reducer';

export default combineReducers({
  // eslint-disable-next-line max-len
  productId,
  relatedReducer,
  updateReviews,
  updateStarReviews,
  updateReviewNumber,
  getMetaData,
  currentStyleIndex,
  style,
  currentSizeIndex,
  currentQuantity,
  currentPhotoIndex,
  showExpandedView,
  showZoomView,
  productData,
  showQuantities,
  promptSelectSize,
});
