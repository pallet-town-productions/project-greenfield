import { combineReducers } from 'redux';
import { currentStyleIndex } from './overview-Reducers/styleSelector/styleSelectorReducers';
import {
  currentSizeIndex, currentQuantity, showQuantities, promptSelectSize, currentCart,
} from './overview-Reducers/addToCart/addToCartReducers';
import { currentPhotoIndex, showExpandedView, showZoomView } from './overview-Reducers/imageGallery/imageGalleryReducers';
// import productData from './overview-Reducers/productInformation/productDataReducers';
import { productId, productData, style } from './setProductReducer';
import relatedReducer from './related-Products-Reducers/related-products-reducer';
import { updateReviews, updateStarReviews, updateReviewNumber } from './RnR-Reducers/RnR-reducer';
import { getMetaData, averageRating } from './RnR-Reducers/RnR-meta-reducer';

export default combineReducers({
  // eslint-disable-next-line max-len
  productId,
  relatedReducer,
  updateReviews,
  updateStarReviews,
  updateReviewNumber,
  getMetaData,
  averageRating,
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
  currentCart,
});
