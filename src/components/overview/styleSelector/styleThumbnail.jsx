import React from 'react';
import PT from 'prop-types';

const StyleThumbnail = function ({ style, styleIndex, handleClick }) {
  return (
    <img
      src={style.photos[0].thumbnail_url}
      className="thumbnail"
      onClick={
    () => handleClick(styleIndex)
    }
      alt={`Thumbnail for style ${style.name}`}
    />
  );
};

StyleThumbnail.propTypes = {
  style: PT.shape({
    photos: PT.array,
    name: PT.string.isRequired,
  }).isRequired,
  styleIndex: PT.number.isRequired,
  handleClick: PT.func.isRequired,
};

export default StyleThumbnail;
