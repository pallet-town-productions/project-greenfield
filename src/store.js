import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import { SPLASHPAGEID } from './util/util';
import exampleStyleData from './exampleStyleData';
import exampleProductData from './exampleProductData';

const initialData = {
  productData: { id: SPLASHPAGEID },
  styleData: {
    product_id: JSON.stringify(SPLASHPAGEID),
    results: [],
  },
  productId: SPLASHPAGEID,
};

const initialTestingData = {
  // camo onesie for testing
  productData: exampleProductData,
  styleData: exampleStyleData,
  productId: 1,
};

export default function configureStore(isTesting = false) {
  const initialState = (isTesting) ? initialTestingData : initialData;
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk),
    ),
  );
}
