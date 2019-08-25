import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { toggleExpandedView } from '../../../actions/overview-Actions/imageGallery/imageGalleryActions';

const mapStateToProps = function (state) {
  const { showExpandedView } = state;
  return { showExpandedView }; 
};

const mapDispatchToProps = function (dispatch) {
  return {
    toggleExpandedView: (showExpanded) => {
      dispatch(toggleExpandedView(showExpanded));
    }
  }
};

const ExpandedViewOverlay = function ({ showExpandedView, toggleExpandedView }) {
  let display = (showExpandedView) ? 'block' : 'none';
  return ();
};