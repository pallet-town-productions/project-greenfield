import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { togglePromptSelectSize } from '../../../actions/overview-Actions/addToCart/changeSizeQty';

const mapStateToProps = function (state) {
  const { currentStyleIndex } = state;
  const sizeList = Object.keys(state.style.results[currentStyleIndex].skus);
  const isOutOfStock = sizeList.length === 0;
  return {
    isOutOfStock,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleClick: () => {
      const selectedSize = Number(document.getElementById('current-size').value);
      if (selectedSize === 0) { // size not selected yet
        dispatch(togglePromptSelectSize(true));
      } else {
        // /////////////////////////////////
        // ADD THIS SKU AND QUANTITY TO CART!!!!
        // /////////////////////////////////
      }
    },
  };
};

export const AddToCartButtonComponent = function ({ isOutOfStock, handleClick }) {
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
        onClick={handleClick}
        role="presentation"
      >
        <i className="material-icons">
          shopping_cart
        </i>
        <span>  Add To Cart</span>
      </div>
    </div>
  );
};

AddToCartButtonComponent.propTypes = {
  isOutOfStock: PT.bool.isRequired,
  handleClick: PT.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButtonComponent);
