import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';

const mapDispatchToProps = function (dispatch) {
  return {
    // have multiple actions for multiple functionalities of AddToCartButton
  };
};

const AddToCartButton = function () {
  return (
    <div>
      <div id="add-to-cart-button">
        <i className="material-icons">
          shopping_cart
        </i>
        <span>  Add To Cart</span>
      </div>
    </div>
  );
};

export default connect(null, null)(AddToCartButton);
