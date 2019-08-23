import React from 'react';


const StyleThumbnail = function({style, styleIndex, handleClick}) {
  return (
    <img
    src={style.photos[0].thumbnail_url} className="thumbnail"
    onClick={
      // () => {console.log(styleIndex)}
      () => handleClick(styleIndex)
    }
    ></img>
  );
}

export default StyleThumbnail;
