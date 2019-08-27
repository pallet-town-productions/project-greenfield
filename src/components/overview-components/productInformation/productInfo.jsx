import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import '../../../styles/overview.scss';
import { zeroPad } from '../../../util/util';

const mapStateToProps = function (state) {
  const { productData, currentStyleIndex, currentPhotoIndex } = state;
  const thisUrl = 'http://ww17.dummyurl.com/'; // THIS NEEDS TO BE UPDATED!!!!!!!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~
  const currentBigPicture = state.style.results[currentStyleIndex].photos[currentPhotoIndex].url;
  return { productData, thisUrl, currentBigPicture };
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

const SocialMediaButtonsComponent = function ({ thisUrl, productData, currentBigPicture }) {
  const productName = productData.name;
  return (
    <div>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${thisUrl}&t=${productName}`}>
        <img
          src="https://img.icons8.com/color/48/000000/facebook.png"
          alt="Share On Facebook"
        />
      </a>
      <a href={`https://twitter.com/intent/tweet?url=${thisUrl}&text=${productName}`}>
        <img
          src="https://img.icons8.com/color/48/000000/twitter.png"
          alt="Share On Twitter"
        />
      </a>
      <a href={`http://pinterest.com/pin/create/button/?url=${thisUrl}&media=${currentBigPicture}&description=${productName}`}>
        <img
          src="https://img.icons8.com/color/48/000000/pinterest--v1.png"
          alt="Share On Pinterest"
        />
      </a>
    </div>
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
SocialMediaButtonsComponent.propTypes = {
  thisUrl: PT.string.isRequired,
  currentBigPicture: PT.string.isRequired,
  ...PRODUCTDATAPROPTYPES,
};
FeatureList.propTypes = PRODUCTDATAPROPTYPES.features;

const ExpandedProductName = connect(mapStateToProps, null)(ExpandedProductNameComponent);
const CategoryName = connect(mapStateToProps, null)(CategoryNameComponent);
const ProductDescription = connect(mapStateToProps, null)(ProductDescriptionComponent);
const SocialMediaButtons = connect(mapStateToProps, null)(SocialMediaButtonsComponent);

export {
  ExpandedProductName,
  CategoryName,
  ProductDescription,
  SocialMediaButtons,
};
