import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import NavCarouselButton from './navCarouselButton';

const mapStateToProps = function (state) {
  // currently selected Style as an index of all styles FOR THIS PRODUCT
  const { currentStyleIndex } = state;
  // currectly selected picture as an index of all picture FOR THIS STYLE
  const { currentPhotoIndex } = state;
  // url for the BIG FIRST IMAGE for currently selected style
  const currentBigPicture = state.style.results[currentStyleIndex].photos[currentPhotoIndex].url;
  const currentStyleName = state.style.results[currentStyleIndex].name;
  return {
    currentStyleIndex,
    currentPhotoIndex,
    currentBigPicture,
    currentStyleName,
  };
};

export const ImageMainComponent = function ({
  currentBigPicture, currentStyleName, handleClick, onHover, thisId,
}) {
  switch (thisId) {
    case 'zoom-photo': // if zoom view, return a div with id zoom-photo
      return (
        // FULL SCREEN THING
        <div
          onClick={handleClick}
          role="presentation"
          className={onHover}
          id={thisId}
        />
      );
    case 'expanded-main-photo':
      return ( // if expanded view, return imageList separately from this image
        <span
          onClick={handleClick}
          role="presentation"
          className={onHover}
        >
          <img
            id={thisId}
            src={currentBigPicture}
            alt={`DUMMY, put in product name, ${currentStyleName}`}
          />
        </span>
      );
    default:
      return ( // if default view, return imageList inside this bigger div
        <div
          onClick={handleClick}
          role="presentation"
          className={onHover}
          id={thisId}
          style={{ backgroundImage: `url(${currentBigPicture})` }}
        >
          <NavCarouselButton isNext={false} />
          <NavCarouselButton isNext />
        </div>
      );
  }
};

ImageMainComponent.propTypes = {
  currentBigPicture: PT.string.isRequired,
  currentStyleName: PT.string.isRequired,
  handleClick: PT.func.isRequired,
  onHover: PT.string.isRequired, // this is a class name that CSS uses
  thisId: PT.string.isRequired, // this is an ID name that CSS uses
};

export default connect(mapStateToProps, null)(ImageMainComponent);
