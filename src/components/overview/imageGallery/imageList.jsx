import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import changePhoto from '../../../actions/overview/imageGallery/changePhoto';
import ImageThumbnail from './imageThumbnail';
import util from '../../../util/util';
// import bunch of other child components

const mapStateToProps = function (state) {
  const { currentStyleIndex } = state;
  const imageList = state.style.results[currentStyleIndex].photos;
  return {
    // currently selected Style as an index of all styles FOR THIS PRODUCT
    currentStyleIndex,
    // list of images for the currently selected Style
    imageList,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSwitchStyle: (photoIndex) => {
      dispatch(changePhoto(photoIndex));
    },
  };
};

const ImageList = function ({ currentStyleIndex, imageList, handleSwitchStyle }) {
  return (
    <ul>
      {imageList.map((image, imageIndex) => {
        const key = util.zeroPad(currentStyleIndex, 4) + util.zeroPad(imageIndex, 4);
        return (
          <ImageThumbnail
            key={util.zeroPad(key)}
            photoIndex={imageIndex}
            url={imageList[imageIndex].thumbnail_url}
            handleClick={handleSwitchStyle}
          />
        );
      })}
    </ul>
  );
};

ImageList.propTypes = {
  currentStyleIndex: PT.number.isRequired,
  imageList: PT.arrayOf(PT.shape({
    thumbnail_url: PT.string.isRequired,
    url: PT.string.isRequired,
  })).isRequired,
  handleSwitchStyle: PT.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
