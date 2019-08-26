import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import ImageMain from './imageMain';
import {
  toggleExpandedView,
  toggleZoomView,
} from '../../../actions/overview-Actions/imageGallery/imageGalleryActions';

const mapStateToProps = function (state) {
  const { showZoomView } = state;
  return { showZoomView };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleHideZoomView: () => {
      dispatch(toggleExpandedView(true));
      dispatch(toggleZoomView(false));
    },
    // handleZoomPan: () => {
    //   // write function for zoom panning
    // },
  };
};

const ZoomViewDisplay = function ({ showZoomView, handleHideZoomView }) {
  const display = (showZoomView) ? 'show' : 'hide';
  return (
    <div className={display} id="image-gallery-overlay">
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
  // handleZoomPan: PT.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ZoomViewDisplay);
