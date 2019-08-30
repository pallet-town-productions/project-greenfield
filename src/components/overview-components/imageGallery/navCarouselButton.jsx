import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
  const { currentPhotoIndex, currentStyleIndex } = state;
  const imageListLength = state.style.results[currentStyleIndex].photos.length;
  return {
    currentPhotoIndex,
    imageListLength,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleClick: (action) => {
      dispatch({type: action});
    }
  };
};

const showButton = function (isNext, currentPhotoIndex, imageListLength) {
  // last one, and isNext: don't show; first one and !isNext... don't show
  if (isNext && currentPhotoIndex === imageListLength - 1) {
    return false;
  } else if (!isNext && currentPhotoIndex === 0) {
    return false;
  } return true;
}

const NavCarouselButtonComponent = function ({ isNext, handleClick, currentPhotoIndex, imageListLength }) {
  const action = (isNext) ? 'NEXT_PHOTO' : 'PREV_PHOTO';
  const thisHandleClick = function (e) {
    e.stopPropagation(); // prevents image behind arrow to be clicked
    handleClick(action)
  };
  const button = (isNext) ? 'navigate_next' : 'navigate_before';
  const show = (showButton(isNext, currentPhotoIndex, imageListLength)) ? 'show' : 'hide';

  return (
    <i className={`material-icons ${show} nav-carousel-button cursor-pointer`}
      id={`${button}`}
      onClick={thisHandleClick}
    >
      {button}
    </i>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavCarouselButtonComponent);
