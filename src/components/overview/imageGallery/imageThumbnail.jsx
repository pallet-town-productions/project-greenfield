import React from 'react';

const ImageThumbnail = function ({ photoIndex, url, handleClick }) {
  return (
    <img
      className="thumbnail"
      src={url}
      onClick={() => handleClick(photoIndex)}
    />
  );
};

export default ImageThumbnail;
