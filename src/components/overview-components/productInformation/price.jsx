import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import '../../../styles/overview.scss';

const mapStateToProps = function (state) {
  const { productData, styleData, currentStyleIndex } = state;
  return { productData, styleData, currentStyleIndex };
};

export const PriceComponent = function ({ productData, styleData, currentStyleIndex }) {
  const price = Number(styleData.results[currentStyleIndex].original_price)
    || Number(productData.default_price);
  const salePrice = Number(styleData.results[currentStyleIndex].sale_price); // default 0

  if (salePrice) {
    return (
      <div>
        <span className="price" id="sale-price">{`$${salePrice}`}</span>
        <span className="price" id="original-price">{`$${price}`}</span>
      </div>
    );
  }
  return (
    <div>
      <span className="price">{`$${price}`}</span>
    </div>
  );
};

PriceComponent.propTypes = {
  productData: PT.shape({
    default_price: PT.string.isRequired, // sketchy!!
  }).isRequired,
  styleData: PT.shape({
    results: PT.arrayOf(PT.shape({
      original_price: PT.string.isRequired, // sketchy!!
      sale_price: PT.string.isRequired, // sketchy!!
    })),
  }).isRequired,
  currentStyleIndex: PT.number.isRequired,
};

export default connect(mapStateToProps, null)(PriceComponent);
