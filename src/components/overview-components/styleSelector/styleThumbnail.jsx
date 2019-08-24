import React from 'react';
import PT from 'prop-types';

const StyleThumbnail = function ({ style, styleIndex, handleClick }) {
  return (
    <span onClick={() => handleClick(styleIndex)} role="presentation">
      <img
        src={style.photos[0].thumbnail_url}
        className="thumbnail style-thumbnail"
        alt={`Thumbnail for style ${style.name}`}
      />
    </span>
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
