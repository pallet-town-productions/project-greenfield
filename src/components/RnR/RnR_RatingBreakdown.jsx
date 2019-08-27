import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StarRating from './RnR_StarRating';
import ConnectedStarBreakdown from './RnR_StarBreakdown';

const mapStateToProps = (state) => ({
  ...state,
});

export const RatingBreakdown = ({ getMetaData }) => {
  const { ratings } = getMetaData;
  const averageStars = 3.5;
  return (
    <div className="rating-breakdown breakdown-widget">
      <h1 className="rating-average">
        {averageStars}
        <StarRating starCount={averageStars} />
      </h1>
      <p className="percent-recommended">100% of reviews recommend this product</p>
      <ConnectedStarBreakdown ratings={ratings} />
    </div>
  );
};


RatingBreakdown.propTypes = {
  getMetaData: PropTypes.shape({
    product_id: PropTypes.string,
    ratings: PropTypes.object,
    recommended: PropTypes.object,
    characteristics: PropTypes.object,
  }).isRequired,
};

const ConnectedRatingBreakdown = connect(mapStateToProps, null)(RatingBreakdown);
export default ConnectedRatingBreakdown;
