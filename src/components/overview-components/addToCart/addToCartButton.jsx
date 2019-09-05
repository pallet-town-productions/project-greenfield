import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { togglePromptSelectSize } from '../../../actions/overview-Actions/addToCart/changeSizeQty';
import { recordClickData, OVERVIEWOWNER } from '../../../util/util';

const apiUrl = process.env.REACT_APP_APIURL || '123.456.789.1011';

function mapStateToProps(st) {
  const { currentStyleIndex, currentSizeIndex, currentQuantity } = st;
  const userSession = Number(window.localStorage.getItem('user_session'));
  const thisStyleObj = st.styleData.results[currentStyleIndex];
  const productId = st.productData.id;
  const styleId = thisStyleObj.style_id;
  const sizeId = Object.values(thisStyleObj.skus)[currentSizeIndex - 1] || -1;
  const qty = currentQuantity || 0;
  const salePrice = Number(thisStyleObj.sale_price);
  const originalPrice = Number(thisStyleObj.original_price);
  const defaultPrice = Number(st.productData.default_price);
  const unitPrice = salePrice || originalPrice || defaultPrice;
  const sizeList = Object.keys(thisStyleObj.skus);
  const isOutOfStock = sizeList.length === 0;
  return {
    addInfo: {
      userSession,
      productId,
      styleId,
      sizeId,
      qty,
      unitPrice,
    },
    postData: {
      user_session: userSession,
      product_id: productId,
    },
    isOutOfStock,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: (e, addInfo, postData) => {
      const selectedSize = Number(document.getElementById('current-size').value);
      if (selectedSize === 0) { // size not selected yet
        dispatch(togglePromptSelectSize(true));
      } else {
        recordClickData(e.currentTarget, OVERVIEWOWNER);
        // post data to /cart/ API
        fetch(`${apiUrl}/cart/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        })
          .then(() => {
            console.log(addInfo);
          });
      }
    },
  };
}

export function AddToCartButtonComponent({
  addInfo, postData, isOutOfStock, handleClick,
}) {
  if (isOutOfStock) {
    return (
      <div>
        <div
          id="add-to-cart-button-out-of-stock"
          className="cursor-not-allowed"
        >
          <i className="material-icons">
            remove_shopping_cart
          </i>
          <span>  Out Of Stock</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div
        id="add-to-cart-button"
        className="cursor-pointer"
        onClick={(e) => {
          handleClick(e, addInfo, postData);
        }}
        role="presentation"
      >
        <i className="material-icons">
            shopping_cart
        </i>
        <span>  Add To Cart</span>
      </div>
    </div>
  );
}

AddToCartButtonComponent.propTypes = {
  isOutOfStock: PT.bool.isRequired,
  handleClick: PT.func.isRequired,
  addInfo: PT.shape({
    productId: PT.number.isRequired,
    styleId: PT.number.isRequired,
    sizeId: PT.number.isRequired, // Value of -1 means size isn't selected
    qty: PT.number.isRequired,
    unitPrice: PT.number.isRequired,
  }).isRequired,
  postData: PT.shape({
    user_session: PT.number.isRequired,
    product_id: PT.number.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButtonComponent);
