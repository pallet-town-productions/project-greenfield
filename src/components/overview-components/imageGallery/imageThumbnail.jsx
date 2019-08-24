import React from 'react';
import PT from 'prop-types';

const ImageThumbnail = function ({ photoIndex, url, handleClick }) {
  return (
    <span onClick={() => handleClick(photoIndex)} role="presentation">
      <img
        className="thumbnail"
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
};

export default ImageThumbnail;
