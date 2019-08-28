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
  const defaultRatings = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  const allRatings = { ...defaultRatings, ...ratings };
  const sumReducer = (accumulator, currentValue) => accumulator + currentValue;
  const totalRatings = Object.values(allRatings).reduce(sumReducer);
  const sum = Object.values(allRatings)
    .map((starcount, index) => (starcount * index))
    .reduce(sumReducer);
  const averageStars = totalRatings > 0 ? parseFloat((sum / totalRatings).toFixed(1)) : 0;
  const recommended = 0;

  return (
    <div className="rating-breakdown breakdown-widget">
      <h1 className="rating-average">
        {averageStars}
        <StarRating starCount={averageStars} />
      </h1>
      <p className="percent-recommended">
        {recommended}
        % of reviews recommend this product
      </p>
      <ConnectedStarBreakdown allRatings={allRatings} totalRatings={totalRatings} />
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
