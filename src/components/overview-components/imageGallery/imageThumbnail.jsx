import React from 'react';
import PT from 'prop-types';
import { recordClickData } from '../../../util/util';

const OWNER = 'Bailey';

function ImageThumbnail({
  photoIndex, url, styleName, handleClick, isSelected, thisId,
}) {
  const DUMMYTHUMBNAILURL = `https://dummyimage.com/100x100/000000/fff.jpg&text=${styleName}`;

  return (
    <span
      onClick={(e) => {
        handleClick(photoIndex);
        recordClickData(e.currentTarget, OWNER);
      }}
      role="presentation"
      id={thisId}
    >
      <img
        className="thumbnail"
        id={(isSelected) ? 'selected-image-thumbnail' : ''}
        src={url || DUMMYTHUMBNAILURL}
        alt={`${styleName}, thumbnail #${photoIndex}`}
      />
    </span>
  );
}

ImageThumbnail.propTypes = {
  photoIndex: PT.number.isRequired,
  url: PT.string.isRequired,
  styleName: PT.string.isRequired,
  handleClick: PT.func.isRequired,
  isSelected: PT.bool.isRequired,
  thisId: PT.string.isRequired,
};

export default ImageThumbnail;
