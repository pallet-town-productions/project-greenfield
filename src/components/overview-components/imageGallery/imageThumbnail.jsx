import React from 'react';
import PT from 'prop-types';

const ImageThumbnail = function ({
  photoIndex, url, handleClick, isSelected, thisId,
}) {
  return (
    <span
      onClick={() => handleClick(photoIndex)}
      role="presentation"
      id={thisId}
    >
      <img
        className="thumbnail"
        id={(isSelected) ? 'selected-image-thumbnail' : ''}
        src={url}
        alt={`DUMMY, show stylename, thumbnail #${photoIndex}`}
      />
    </span>
  );
};

ImageThumbnail.propTypes = {
  photoIndex: PT.number.isRequired,
  url: PT.string.isRequired,
  handleClick: PT.func.isRequired,
  isSelected: PT.bool.isRequired,
};

export default ImageThumbnail;
