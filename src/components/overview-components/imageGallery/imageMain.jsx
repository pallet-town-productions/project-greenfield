import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import NavCarouselButton from './navCarouselButton';

function mapStateToProps(st) {
  // currently selected Style as an index of all styles FOR THIS PRODUCT
  // currectly selected picture as an index of all picture FOR THIS STYLE
  const { currentStyleIndex, currentPhotoIndex } = st;
  // url for the BIG FIRST IMAGE for currently selected style
  const currentBigPicture = st.styleData.results[currentStyleIndex].photos[currentPhotoIndex].url;
  const currentStyleName = st.styleData.results[currentStyleIndex].name;
  const currentProductName = st.productData.name;
  return {
    currentProductName,
    currentStyleIndex,
    currentPhotoIndex,
    currentBigPicture,
    currentStyleName,
  };
}

export function ImageMainComponent({
  currentBigPicture,
  currentProductName,
  currentStyleName,
  handleClick,
  handleExit,
  onHover,
  thisId,
}) {
  /* eslint-disable no-param-reassign */
  if (!currentBigPicture) { // if null bigPicture URL, make nothing clickable
    handleClick = () => {};
    currentBigPicture = 'https://dummyimage.com/800x800/000/fff&text=No%20Photo%20Available';
    onHover = 'cursor-not-allowed';
  }
  /* eslint-enable no-param-reassign */

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
          id="expanded-view-background"
          onClick={handleExit}
          role="presentation"
        >
          <img
            className={onHover}
            onClick={handleClick}
            role="presentation"
            id={thisId}
            src={currentBigPicture}
            alt={`${currentProductName}, ${currentStyleName}`}
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
}

ImageMainComponent.propTypes = {
  currentBigPicture: PT.string.isRequired,
  currentProductName: PT.string.isRequired,
  currentStyleName: PT.string.isRequired,
  onHover: PT.string.isRequired, // this is a class name that CSS uses
  thisId: PT.string.isRequired, // this is an ID name that CSS uses
};

ImageMainComponent.defaultProps = {
  handleExit: () => {},
  handleClick: () => {},
  onHover: "",
}

export default connect(mapStateToProps, null)(ImageMainComponent);
