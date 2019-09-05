import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ starCount = 0 }) => {
  const stars = [];
  const buildIcons = (iconCount = 0, iconType = '', icons = []) => {
    for (let i = 0; i < iconCount; i += 1) {
      icons.push({ iconType, id: iconType + i.toString() });
    }
  };

  if (starCount >= 0 && starCount <= 5) {
    const fullStarCount = Math.floor(starCount);
    const renderPartialStar = !Number.isInteger(starCount);
    const remainingStars = 5 - fullStarCount - Number(renderPartialStar);
    const emptyStarCount = remainingStars > 0 && remainingStars <= 5 ? remainingStars : 0;
    buildIcons(fullStarCount, 'star', stars);
    if (renderPartialStar) {
      buildIcons(1, 'star_half', stars);
    }
    buildIcons(emptyStarCount, 'star_border', stars);
  }

  const starIcons = stars.map(({ iconType, id }) => (
    <i key={id} className="material-icons">
      { iconType }
    </i>
  ));
  return <span className="star-rating">{starIcons}</span>;
};

StarRating.propTypes = {
  starCount: PropTypes.number.isRequired,
};

export default StarRating;
