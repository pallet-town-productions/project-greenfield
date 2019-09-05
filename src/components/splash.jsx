import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import PT from 'prop-types';
import { setProductAction } from '../actions/setProductAction';
import { FRONTPAGEPRODUCTID } from '../util/util';

function mapDispatchToProps(dispatch) {
  return {
    updateProductId: (productId) => {
      dispatch(setProductAction(productId));
    },
  };
}

function Splash({ productId, updateProductId, location }) {
  updateProductId(productId);
  const { pathname: pathName } = location;
  return (
    <div id="splash-page">
      LOADING...
      {pathName === '/' && <Redirect to={FRONTPAGEPRODUCTID.toString()} />}
    </div>
  );
}

Splash.propTypes = {
  location: PT.shape({ pathname: PT.string }).isRequired,
  productId: PT.number.isRequired,
  updateProductId: PT.func.isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(Splash));
