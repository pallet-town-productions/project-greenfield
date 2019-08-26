import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { toggleExpandedView } from '../../../actions/overview-Actions/imageGallery/imageGalleryActions';
import ImageMain from './imageMain';
import ImageList from './imageList';

const mapStateToProps = function (state) {
  const { showExpandedView } = state;
  return { showExpandedView }; 
};

const mapDispatchToProps = function (dispatch) {
  return {
    toggleExpandedView: (showExpanded) => {
      dispatch(toggleExpandedView(showExpanded));
      console.log(showExpanded);
    }
  }
};

const ExpandedViewOverlay = function ({ showExpandedView, toggleExpandedView }) {
  let display = (showExpandedView) ? 'show' : 'hide';
  return (
    <div className={display} id="image-gallery-overlay">
      <ImageMain />
      <ImageList />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpandedViewOverlay);