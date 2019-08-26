import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import ImageList from './imageList';
import ImageMain from './imageMain';
import { toggleExpandedView } from '../../../actions/overview-Actions/imageGallery/imageGalleryActions';
// import bunch of other child components

const mapDispatchToProps = function (dispatch) {
  return {
    dispatchExpandedView: () => {
      dispatch(toggleExpandedView(true));
    },
  };
};

const ImageGallery = function ({ dispatchExpandedView }) {
  return (
    <section>
      <ImageList />
      <ImageMain
        handleClick={dispatchExpandedView}
        onHover="onHover-zoomin"
        thisId="mainphoto"
      />
    </section>
  );
};

ImageGallery.propTypes = {
  dispatchExpandedView: PT.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ImageGallery);
