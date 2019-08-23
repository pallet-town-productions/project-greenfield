import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
  // currently selected Style as an index of all styles FOR THIS PRODUCT
  let currentStyleIndex = state.currentStyleIndex;
  // currectly selected picture as an index of all picture FOR THIS STYLE
  let currentPhotoIndex = state.currentPhotoIndex;
  // url for the BIG FIRST IMAGE for currently selected style
  let currentBigPicture = state.style.results[currentStyleIndex].photos[currentPhotoIndex].url
  return {
    currentStyleIndex,
    currentPhotoIndex,
    currentBigPicture
  }
}

const ImageMain = function ({currentStyleIndex, currentBigPicture}) {
  return (
    <img id="mainphoto" src={currentBigPicture}></img>
  );
};

export default connect(mapStateToProps, null)(ImageMain);
