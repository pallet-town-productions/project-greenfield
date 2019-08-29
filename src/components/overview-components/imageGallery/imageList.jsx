import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { changePhoto } from '../../../actions/overview-Actions/imageGallery/imageGalleryActions';
import ImageThumbnail from './imageThumbnail';
import { zeroPad } from '../../../util/util';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import bunch of other child components

const mapStateToProps = function (state) {
  const { currentStyleIndex, currentPhotoIndex } = state;
  const imageList = state.style.results[currentStyleIndex].photos;
  return {
    // currently selected Style as an index of all styles FOR THIS PRODUCT
    currentStyleIndex,
    // currently selected photo, to render thumbnail with highlight
    currentPhotoIndex,
    // list of images for the currently selected Style
    imageList,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSwitchPhoto: (photoIndex) => {
      dispatch(changePhoto(photoIndex));
    },
  };
};

const ImageList = function ({
  currentStyleIndex, currentPhotoIndex, imageList, handleSwitchPhoto, isExpanded,
}) {
  const display = (isExpanded) ? 'image-thumbnail-slide-expanded' : 'image-thumbnail-slide-default';
  return (
    <ul id={display}>
      <Slider
        dots={isExpanded}
        infinite={false}
        slidesToShow={7}
        slidesToScroll={1}
        focusOnSelect
      >
        {imageList.map((image, imageIndex) => {
          const key = zeroPad(currentStyleIndex, 4) + zeroPad(imageIndex, 4);
          return (
            <ImageThumbnail
              key={zeroPad(key)}
              photoIndex={imageIndex}
              url={imageList[imageIndex].thumbnail_url}
              handleClick={handleSwitchPhoto}
              isSelected={currentPhotoIndex === imageIndex}
            />
          );
        })}
      </Slider>
    </ul>
  );
};

ImageList.propTypes = {
  currentStyleIndex: PT.number.isRequired,
  currentPhotoIndex: PT.number.isRequired,
  imageList: PT.arrayOf(PT.shape({
    thumbnail_url: PT.string.isRequired,
    url: PT.string.isRequired,
  })).isRequired,
  handleSwitchPhoto: PT.func.isRequired,
  isExpanded: PT.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
