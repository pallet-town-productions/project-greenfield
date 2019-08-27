import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import ImageMain from './imageMain';
import {
  toggleExpandedView,
  toggleZoomView,
} from '../../../actions/overview-Actions/imageGallery/imageGalleryActions';
import zoomPan from './handleZoomPan';

const mapStateToProps = function (state) {
  const { showZoomView, currentStyleIndex, currentPhotoIndex } = state;
  const currentBigPicture = state.style.results[currentStyleIndex].photos[currentPhotoIndex].url;
  return { showZoomView, currentBigPicture };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleHideZoomView: () => {
      dispatch(toggleExpandedView(true));
      dispatch(toggleZoomView(false));
    },
    handleZoomPan: (e, imageUrl) => {
      zoomPan(e, imageUrl);
    },
  };
};

const ZoomViewDisplay = function ({ showZoomView, currentBigPicture, handleHideZoomView, handleZoomPan }) {
  const display = (showZoomView) ? 'show' : 'hide';
  var handleZoomPanBound = (e) => {handleZoomPan(e, currentBigPicture)};
  return (
    <div className={display} 
    // id="zoomphoto"
    onMouseMove={handleZoomPanBound}>
      <ImageMain
        handleClick={handleHideZoomView}
        onHover="onHover-zoomout"
        thisId="zoomphoto"
      />
    </div>
  );
};

ZoomViewDisplay.propTypes = {
  showZoomView: PT.bool.isRequired,
  handleHideZoomView: PT.func.isRequired,
  handleZoomPan: PT.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ZoomViewDisplay);
