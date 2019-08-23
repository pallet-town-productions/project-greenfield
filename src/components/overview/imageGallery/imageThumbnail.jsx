import React from 'react';

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

export default ImageThumbnail;
