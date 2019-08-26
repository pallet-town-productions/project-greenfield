import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
  // currently selected Style as an index of all styles FOR THIS PRODUCT
  const { currentStyleIndex } = state;
  // currectly selected picture as an index of all picture FOR THIS STYLE
  const { currentPhotoIndex } = state;
  // url for the BIG FIRST IMAGE for currently selected style
  const currentBigPicture = state.style.results[currentStyleIndex].photos[currentPhotoIndex].url;
  const currentStyleName = state.style.results[currentStyleIndex].name;
  return {
    currentStyleIndex,
    currentPhotoIndex,
    currentBigPicture,
    currentStyleName,
  };
};

const ImageMain = function ({ currentBigPicture, currentStyleName, handleClick }) {
  return (
    <img
      id="mainphoto"
      src={currentBigPicture}
      alt={`DUMMY, put in product name, ${currentStyleName}`}
      onClick={handleClick}
    />
  );
};

ImageMain.propTypes = {
  currentBigPicture: PT.string.isRequired,
  currentStyleName: PT.string.isRequired,
};

export default connect(mapStateToProps, null)(ImageMain);
