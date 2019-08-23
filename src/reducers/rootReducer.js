import { combineReducers } from 'redux';

//styles are renamed results because the StyleSelector JSON object's key that has all the styles is called results
import style from './overview/styleSelector/currentStyle.js';

export default combineReducers({
  style,
});
