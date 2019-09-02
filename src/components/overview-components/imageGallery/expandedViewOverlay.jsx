import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import ImageMain from './imageMain';
import ImageList from './imageList';
import {
  toggleExpandedView,
  toggleZoomView,
} from '../../../actions/overview-Actions/imageGallery/imageGalleryActions';
import ExitButton from './exitButton';

const mapStateToProps = function (st) {
  const { showExpandedView } = st;
  return { showExpandedView };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleHideExpandedView: () => {
      dispatch(toggleExpandedView(false));
    },
    handleShowZoomView: () => {
      dispatch(toggleZoomView(true));
      dispatch(toggleExpandedView(false));
    },
  };
};

export const ExpandedViewOverlayComponent = function ({
  showExpandedView,
  handleHideExpandedView,
  handleShowZoomView,
}) {
  const display = (showExpandedView) ? 'show' : 'hide';
  return (
    <div className={display} id="image-gallery-overlay">
      <ExitButton handleExit={handleHideExpandedView} />
      <ImageMain
        handleClick={handleShowZoomView}
        onHover="cursor-crosshair"
        thisId="expanded-main-photo"
      />
      <ImageList isExpanded />
    </div>
  );
};

ExpandedViewOverlayComponent.propTypes = {
  showExpandedView: PT.bool.isRequired,
  handleHideExpandedView: PT.func.isRequired,
  handleShowZoomView: PT.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpandedViewOverlayComponent);
