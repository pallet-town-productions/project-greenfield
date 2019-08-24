import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import '../../../styles/overview.scss';

const mapStateToProps = function (state) {
  const { productData } = state;
  return { productData };
};

const ExpandedProductNameComponent = function ({ productData }) {
  return (
    <div>
      {productData.name}
    </div>
  );
};

const CategoryNameComponent = function ({ productData }) {
  return (
    <div>
      {productData.category}
    </div>
  );
};

ExpandedProductNameComponent.propTypes = {
  productData: PT.shape({
    name: PT.string.isRequired,
  }).isRequired,
};

CategoryNameComponent.propTypes = {
  productData: PT.shape({
    category: PT.string.isRequired,
  }).isRequired,
};

const ExpandedProductName = connect(mapStateToProps, null)(ExpandedProductNameComponent);
const CategoryName = connect(mapStateToProps, null)(CategoryNameComponent);

export {
  ExpandedProductName,
  CategoryName,
};
