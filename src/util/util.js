const zeroPad = function (num, places) {
  const zero = places - num.toString().length;
  return `O${Array(+(zero > 0 && zero)).join('0')}${num}`;
};

const getData = function (endpoint) {
  return fetch(`http://54.213.200.113:3000${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const getProductData = function (productId = 1) {
  // returns the fetch's returned promise
  return getData(`/products/${productId}`);
};

const getStyleData = function (productId = 1) {
  // returns the fetch's returned promise
  return getData(`/products/${productId}/styles`);
};

const getProductId = function (endpoint) {
  // this is written to extract the first instance of /number/ and return the number
  // takes an endpoint as an argument
  // returns product ID
  try {
    const match = endpoint.match(/\/\d{1,}\//)[0];
    return Number(match.substring(1, match.length - 1));
  } catch (err) {
    return 1;
  }
};

export {
  zeroPad,
  getProductData,
  getStyleData,
  getProductId,
};
