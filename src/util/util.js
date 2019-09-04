import api from '../config/config';

const SPLASHPAGEID = -999; // is reserved to be a trigger for a splash page

function zeroPad(num, places) {
  const zero = places - num.toString().length;
  return `O${Array(+(zero > 0 && zero)).join('0')}${num}`;
}

function getData(endpoint) {
  return fetch(`http://${api}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

function getProductData(productId = 1) {
  // returns the fetch's returned promise
  return getData(`/products/${productId}`);
}

function getStyleData(productId = 1) {
  // returns the fetch's returned promise
  return getData(`/products/${productId}/styles`);
}

function getProductId(endpoint) {
  // this is written to extract the first instance of /number/ and return the number
  // takes an endpoint as an argument
  // returns product ID
  try {
    const match = endpoint.match(/\/\d{1,}\//)[0];
    return Number(match.substring(1, match.length - 1));
  } catch (err) {
    return 1;
  }
}

export {
  SPLASHPAGEID,
  zeroPad,
  getProductData,
  getStyleData,
  getProductId,
};
