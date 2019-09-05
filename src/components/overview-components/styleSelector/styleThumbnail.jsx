import React from 'react';
import PT from 'prop-types';

function CheckBox({ isRendered }) {
  if (isRendered) {
    return (
      <i className="material-icons" id="check-icon">check_box</i>
    );
  }
  return null;
}

function StyleThumbnail({
  thisId, styleObj, styleIndex, currentStyleIndex, currentPhotoIndex, handleClick,
}) {
  const DUMMYTHUMBNAILURL = `https://dummyimage.com/100x100/000000/fff.jpg&text=${styleObj.name}`;

  return (
    <div
      id={thisId}
      onClick={(e) => {
        handleClick(e, styleObj, styleIndex, currentPhotoIndex);
      }}
      role="presentation"
    >
      <CheckBox isRendered={styleIndex === currentStyleIndex} />
      <img
        src={styleObj.photos[0].thumbnail_url || DUMMYTHUMBNAILURL}
        className="thumbnail style-thumbnail"
        alt={`Thumbnail for style ${styleObj.name}`}
      />
    </div>
  );
}

CheckBox.propTypes = {
  isRendered: PT.bool.isRequired,
};

StyleThumbnail.propTypes = {
  thisId: PT.string.isRequired,
  styleObj: PT.shape({
    photos: PT.array,
    name: PT.string.isRequired,
  }).isRequired,
  styleIndex: PT.number.isRequired,
  currentStyleIndex: PT.number.isRequired,
  currentPhotoIndex: PT.number.isRequired,
  handleClick: PT.func.isRequired,
};

export default StyleThumbnail;
