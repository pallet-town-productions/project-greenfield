import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import ImageMain from './imageMain';
import ImageList from './imageList';
import { toggleExpandedView } from '../../../actions/overview-Actions/imageGallery/imageGalleryActions';
import ExitButton from './exitButton';

const mapStateToProps = function (state) {
  const { showExpandedView } = state;
  return { showExpandedView };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleHideExpandedView: () => {
      dispatch(toggleExpandedView(false));
    },
    handleZoom: () => {
    //   // WRITE ZOOM FUNCTION
    },
  };
};

const ExpandedViewOverlay = function ({ showExpandedView, handleHideExpandedView, handleZoom }) {
  const display = (showExpandedView) ? 'show' : 'hide';
  return (
    <div className={display} id="image-gallery-overlay">
      <ExitButton handleExit={handleHideExpandedView} />
      <ImageMain handleClick={handleZoom} />
      <ImageList />
    </div>
  );
};

ExpandedViewOverlay.propTypes = {
  showExpandedView: PT.bool.isRequired,
  handleHideExpandedView: PT.func.isRequired,
  handleZoom: PT.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpandedViewOverlay);
