import React from 'react';
import PT from 'prop-types';

const ImageThumbnail = function ({ photoIndex, url, handleClick }) {
  return (
    <img
      className="thumbnail"
      src={url}
      onClick={() => handleClick(photoIndex)}
      alt={`DUMMY, show stylename, thumbnail #${photoIndex}`}
    />
  );
};

ImageThumbnail.propTypes = {
  photoIndex: PT.number.isRequired,
  url: PT.string.isRequired,
  handleClick: PT.func.isRequired,
};

export default ImageThumbnail;
