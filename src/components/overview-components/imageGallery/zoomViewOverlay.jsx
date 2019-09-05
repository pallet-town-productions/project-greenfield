import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import ImageMain from './imageMain';
import {
  toggleExpandedView,
  toggleZoomView,
} from '../../../actions/overview-Actions/imageGallery/imageGalleryActions';
import zoomPan from './handleZoomPan';
import { recordClickData, OVERVIEWOWNER } from '../../../util/util';

function mapStateToProps(st) {
  const { showZoomView, currentStyleIndex, currentPhotoIndex } = st;
  const currentBigPicture = st.styleData.results[currentStyleIndex].photos[currentPhotoIndex].url;
  return { showZoomView, currentBigPicture };
}

function mapDispatchToProps(dispatch) {
  return {
    handleHideZoomView: () => {
      dispatch(toggleExpandedView(true));
      dispatch(toggleZoomView(false));
      recordClickData({ id: 'zoom-view-hide' }, OVERVIEWOWNER);
    },
    handleZoomPan: (e, imageUrl) => {
      zoomPan(e, imageUrl);
    },
  };
}

export function ZoomViewDisplayComponent({
  showZoomView, currentBigPicture, handleHideZoomView, handleZoomPan,
}) {
  const display = (showZoomView) ? 'show' : 'hide';
  const handleZoomPanBound = (e) => { handleZoomPan(e, currentBigPicture); };
  return (
    <div>
      <div
        className={`${display} cursor-zoomout`}
        onMouseMove={handleZoomPanBound}
        id="zoom-view-mouse-move"
        onClick={handleHideZoomView}
        role="presentation"
      >
        <ImageMain
          thisId="zoom-photo"
        />
      </div>
    </div>
  );
}

ZoomViewDisplayComponent.propTypes = {
  showZoomView: PT.bool.isRequired,
  currentBigPicture: PT.string.isRequired,
  handleHideZoomView: PT.func.isRequired,
  handleZoomPan: PT.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ZoomViewDisplayComponent);
