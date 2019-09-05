const FRONTPAGEPRODUCTID = 5; // default product for when the page doesn't have a num endpoint
const SPLASHPAGEID = -999; // is reserved to be a trigger for a splash page
const OVERVIEWOWNER = 'overview';
const apiUrl = process.env.REACT_APP_APIURL || '123.456.789.1011';


function zeroPad(num, places) {
  const zero = places - num.toString().length;
  return `O${Array(+(zero > 0 && zero)).join('0')}${num}`;
}

function getData(endpoint) {
  return fetch(`${apiUrl}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

function getProductData(productId = FRONTPAGEPRODUCTID) {
  // returns the fetch's returned promise
  return getData(`/products/${productId}`);
}

function getStyleData(productId = FRONTPAGEPRODUCTID) {
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
    return FRONTPAGEPRODUCTID;
  }
}

const recordClickData = (target, owner) => {
  const now = Date.now().toString();
  const data = {
    element: target.id,
    widget: owner,
    time: now,
  };
  const parsedData = JSON.stringify(data);

  const url = `${apiUrl}/interactions`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: parsedData,
  }).then((response) => console.log(response))
    .catch((e) => console.log(e));
};

export {
  FRONTPAGEPRODUCTID,
  SPLASHPAGEID,
  OVERVIEWOWNER,
  zeroPad,
  getProductData,
  getStyleData,
  getProductId,
  recordClickData,
};
