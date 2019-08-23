import React from 'react';

const StyleThumbnail = function({style, handleSwitchStyle}) {
  return (
    <img src={style.photos[0].thumbnail_url} className="thumbnail"></img>
  );
}

export default StyleThumbnail;