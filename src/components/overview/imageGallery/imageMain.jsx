import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
  // currently selected Style as an index of all styles FOR THIS PRODUCT
  const { currentStyleIndex } = state;
  // currectly selected picture as an index of all picture FOR THIS STYLE
  const { currentPhotoIndex } = state;
  // url for the BIG FIRST IMAGE for currently selected style
  const currentBigPicture = state.style.results[currentStyleIndex].photos[currentPhotoIndex].url;
  return {
    currentStyleIndex,
    currentPhotoIndex,
    currentBigPicture,
  };
};

const ImageMain = function ({ currentStyleIndex, currentBigPicture }) {
  return (
    <img id="mainphoto" src={currentBigPicture} />
  );
};

export default connect(mapStateToProps, null)(ImageMain);
