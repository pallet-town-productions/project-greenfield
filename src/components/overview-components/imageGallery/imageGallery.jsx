import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import ImageList from './imageList';
import ImageMain from './imageMain';
import { toggleExpandedView } from '../../../actions/overview-Actions/imageGallery/imageGalleryActions';
// import bunch of other child components

function mapDispatchToProps(dispatch) {
  return {
    dispatchExpandedView: () => {
      dispatch(toggleExpandedView(true));
    },
  };
}

export function ImageGalleryComponent({ dispatchExpandedView }) {
  return (
    <section id="image-gallery-grid-default">
      <ImageMain
        handleClick={dispatchExpandedView}
        onHover="cursor-zoomin"
        thisId="main-photo"
      />
      <ImageList isExpanded={false} />
    </section>
  );
}

ImageGalleryComponent.propTypes = {
  dispatchExpandedView: PT.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ImageGalleryComponent);
