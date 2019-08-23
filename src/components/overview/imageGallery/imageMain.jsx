import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
  return {
    currentStyleIndex: state.currentStyleIndex,
    currentStyleBigPicture: state.style.results[state.currentStyleIndex].photos[0].url
  }
}

const ImageMain = function ({currentStyleIndex, currentStyleBigPicture}) {
  return (
    <img id="mainphoto" src={currentStyleBigPicture}></img>
  );
};

export default connect(mapStateToProps, null)(ImageMain);
