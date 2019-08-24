import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import '../../../styles/overview.scss';
import { zeroPad } from '../../../util/util';

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

const ProductDescriptionComponent = function ({ productData }) {
  return (
    <div>
      <strong id="slogan">{productData.slogan}</strong>
      <div id="productdescription">{productData.description}</div>
      <FeatureList featureList={productData.features} productId={productData.id} />
    </div>
  );
};

const FeatureList = function ({ featureList, productId }) {
  return (
    <ul>
      {
        featureList.map((feature, index) => (
          <li key={zeroPad(productId, 7) + zeroPad(index, 2)}>
            {`${feature.feature}: ${feature.value}`}
          </li>
        ))
      }
    </ul>
  );
};

const PRODUCTDATAPROPTYPES = {
  productData: PT.shape({
    id: PT.number.isRequired,
    name: PT.string.isRequired,
    category: PT.string.isRequired,
    slogan: PT.string.isRequired,
    description: PT.string.isRequired,
    default_price: PT.string.isRequired, // sketchy!!
    features: PT.arrayOf(PT.shape({
      feature: PT.string.isRequired,
      value: PT.string.isRequired,
    })).isRequired,
  }).isRequired,
};

ExpandedProductNameComponent.propTypes = PRODUCTDATAPROPTYPES;
CategoryNameComponent.propTypes = PRODUCTDATAPROPTYPES;
ProductDescriptionComponent.propTypes = PRODUCTDATAPROPTYPES;
FeatureList.propTypes = PRODUCTDATAPROPTYPES.features;

const ExpandedProductName = connect(mapStateToProps, null)(ExpandedProductNameComponent);
const CategoryName = connect(mapStateToProps, null)(CategoryNameComponent);
const ProductDescription = connect(mapStateToProps, null)(ProductDescriptionComponent);

export {
  ExpandedProductName,
  CategoryName,
  ProductDescription,
};
