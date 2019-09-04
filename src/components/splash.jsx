import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { setProductAction } from '../actions/setProductAction';

function mapDispatchToProps(dispatch) {
  return {
    updateProductId: (productId) => {
      dispatch(setProductAction(productId));
    },
  };
}

function Splash({ productId, updateProductId }) {
  updateProductId(productId);
  return (
    <div id="splash-page">LOADING...</div>
  );
}

Splash.propTypes = {
  productId: PT.number.isRequired,
  updateProductId: PT.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Splash);
