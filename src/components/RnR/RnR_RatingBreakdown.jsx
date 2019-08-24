import React from 'react';
import { connect } from 'react-redux';
import StarRating from './RnR_StarRating';
import StarBreakdown from './RnR_StarBreakdown';

const mapStateToProps = (state) => ({
  ...state,
});

const RatingBreakdown = () => (
  <div>
    <h2 className="rating-average">
      3.5
      <StarRating starCount={3.5} />
    </h2>
    <p className="percent-recommended">100% of reviews recommend this product</p>
    <StarBreakdown ratings={{ 1: 3, 4: 5 }} />
  </div>
);

const connectedRatingBreakdown = connect(mapStateToProps, null)(RatingBreakdown);
export default connectedRatingBreakdown;
