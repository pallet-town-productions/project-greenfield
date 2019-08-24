import React from 'react';
import StarRating from './RnR_StarRating';
import ConnectedStarBreakdown from './RnR_StarBreakdown';

const RatingBreakdown = () => (
  <div>
    <h2 className="rating-average">
      3.5
      <StarRating starCount={3.5} />
    </h2>
    <p className="percent-recommended">100% of reviews recommend this product</p>
    <ConnectedStarBreakdown ratings={{ 1: 3, 4: 5 }} />
  </div>
);

export default RatingBreakdown;
