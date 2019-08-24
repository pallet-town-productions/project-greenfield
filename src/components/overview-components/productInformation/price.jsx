import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import '../../../styles/overview.scss';

const mapStateToProps = function (state) {
  const { productData, style, currentStyleIndex } = state;
  return { productData, style, currentStyleIndex };
};

const Price = function ({ productData, style, currentStyleIndex }) {
  const price = Number(style.results[currentStyleIndex].original_price)
    || Number(productData.default_price);
  const salePrice = Number(style.results[currentStyleIndex].sale_price); // default 0

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

Price.propTypes = {
  productData: PT.shape({
    default_price: PT.string.isRequired, // sketchy!!
  }).isRequired,
  style: PT.shape({
    results: PT.arrayOf(PT.shape({
      original_price: PT.string.isRequired, // sketchy!!
      sale_price: PT.string.isRequired, // sketchy!!
    })),
  }).isRequired,
  currentStyleIndex: PT.number.isRequired,
};

export default connect(mapStateToProps, null)(Price);
