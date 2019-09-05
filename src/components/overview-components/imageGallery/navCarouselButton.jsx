import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { recordClickData } from '../../../util/util';

const OWNER = 'Bailey';

function mapStateToProps(st) {
  const { currentPhotoIndex, currentStyleIndex } = st;
  const imageListLength = st.styleData.results[currentStyleIndex].photos.length;
  return {
    currentPhotoIndex,
    imageListLength,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: (e, action) => {
      dispatch({ type: action });
      recordClickData(e.target, OWNER);
    },
  };
}

function showButton(isNext, currentPhotoIndex, imageListLength) {
  // last one, and isNext: don't show; first one and !isNext... don't show
  if (isNext && currentPhotoIndex === imageListLength - 1) {
    return false;
  } if (!isNext && currentPhotoIndex === 0) {
    return false;
  } return true;
}

function NavCarouselButtonComponent({
  isNext, handleClick, currentPhotoIndex, imageListLength,
}) {
  const action = (isNext) ? 'NEXT_PHOTO' : 'PREV_PHOTO';
  function thisHandleClick(e) {
    e.stopPropagation(); // prevents image behind arrow to be clicked
    handleClick(e, action);
  }
  const button = (isNext) ? 'navigate_next' : 'navigate_before';
  const show = (showButton(isNext, currentPhotoIndex, imageListLength)) ? 'show' : 'hide';

  return (
    <span onClick={thisHandleClick} role="presentation">
      <i
        className={`material-icons ${show} nav-carousel-button cursor-pointer`}
        id={`${button}`}
      >
        {button}
      </i>
    </span>
  );
}

NavCarouselButtonComponent.propTypes = {
  isNext: PT.bool.isRequired,
  handleClick: PT.func.isRequired,
  currentPhotoIndex: PT.number.isRequired,
  imageListLength: PT.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavCarouselButtonComponent);
