import { combineReducers } from 'redux';

import currentStyleIndex from './overview/styleSelector/currentStyle';
import style from './overview/styleSelector/styleList';
import currentPhotoIndex from './overview/imageGallery/currentPhoto';

export default combineReducers({
  currentStyleIndex, style, currentPhotoIndex,
});
