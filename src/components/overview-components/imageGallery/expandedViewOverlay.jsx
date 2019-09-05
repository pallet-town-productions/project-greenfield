import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import ImageMain from './imageMain';
import ImageList from './imageList';
import {
  toggleExpandedView,
  toggleZoomView,
} from '../../../actions/overview-Actions/imageGallery/imageGalleryActions';
import { recordClickData } from '../../../util/util';
import { OWNER } from '../overview';

function mapStateToProps(st) {
  const { showExpandedView } = st;
  return { showExpandedView };
}

function mapDispatchToProps(dispatch) {
  return {
    handleHideExpandedView: () => {
      dispatch(toggleExpandedView(false));
      recordClickData({id: "expanded-view-hide"}, OWNER);
    },
    handleShowZoomView: (e) => {
      e.stopPropagation();
      dispatch(toggleZoomView(true));
      dispatch(toggleExpandedView(false));
      recordClickData({id: "zoom-view-show"}, OWNER);
    },
  };
}

export function ExpandedViewOverlayComponent({
  showExpandedView,
  handleHideExpandedView,
  handleShowZoomView,
}) {
  const display = (showExpandedView) ? 'show' : 'hide';
  return (
    <div className={display} id="image-gallery-overlay">
      <ImageMain
        handleExit={handleHideExpandedView}
        handleClick={handleShowZoomView}
        onHover="cursor-crosshair"
        thisId="expanded-main-photo"
      />
      <ImageList isExpanded />
    </div>
  );
}

ExpandedViewOverlayComponent.propTypes = {
  showExpandedView: PT.bool.isRequired,
  handleHideExpandedView: PT.func.isRequired,
  handleShowZoomView: PT.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpandedViewOverlayComponent);
