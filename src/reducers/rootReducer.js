import { combineReducers } from 'redux';

//styles are renamed results because the StyleSelector JSON object's key that has all the styles is called results
import currentStyleIndex from './overview/styleSelector/currentStyle.js';
import style from './overview/styleSelector/styleList.js';

export default combineReducers({
  currentStyleIndex, style
});
