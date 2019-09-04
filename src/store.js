import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

import { SPLASHPAGEID } from './util/util';
import exampleStyleData from './exampleStyleData';
import exampleProductData from './exampleProductData';

const initialData = {
  productData: exampleProductData,
  styleData: exampleStyleData,
  productId: SPLASHPAGEID,
};

export default function configureStore(initialState = initialData) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk),
    ),
  );
}
