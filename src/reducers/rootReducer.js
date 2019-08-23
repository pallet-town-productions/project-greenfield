import { combineReducers } from 'redux';

import productId from './reducer-test';
import relatedReducer from './related-Products-Reducers/related-products-reducer';

export default combineReducers({
  productId, relatedReducer,
});
