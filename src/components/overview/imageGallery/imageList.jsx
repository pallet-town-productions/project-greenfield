import React from 'react';
import { connect } from 'react-redux';
import changePhoto from './../../../actions/overview/imageGallery/changePhoto';
import ImageThumbnail from './imageThumbnail.jsx';
// import bunch of other child components

const mapStateToProps = function(state) {
  let currentStyleIndex = state.currentStyleIndex;
  let imageList = state.style.results[currentStyleIndex].photos;
  return {
    // currently selected Style as an index of all styles FOR THIS PRODUCT
    currentStyleIndex,
    // list of images for the currently selected Style
    imageList
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleSwitchStyle: (photoIndex) => {
      dispatch(changePhoto(photoIndex));
    }
  }
}

const ImageList = function ({ imageList, handleSwitchStyle }) {
  return (
    <ul>
      {imageList.map((image, index) => (
        <ImageThumbnail key={index} // dummy
        photoIndex={index}
        url={imageList[index].thumbnail_url}
        handleClick={handleSwitchStyle}
        />
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
