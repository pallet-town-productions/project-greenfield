import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import StarRating from '../../RnR/RnR_StarRating';

const mapStateToProps = function (st) {
  const { updateReviews, averageRating } = st;
  return { updateReviews, averageRating };
};

const ReviewsLinkComponent = function ({ updateReviews, averageRating }) {
  const readReviewsString = (function (numReviews) {
    switch (numReviews) {
      case 0:
        return '';
      case 1:
        return `Read ${numReviews} review`;
      default:
        return `Read all ${numReviews} reviews`;
    }
  }(updateReviews.length));

  return (
    <span>
      <StarRating starCount={averageRating} />
      <a id="reviewsLink" href="#scrollRnR">{readReviewsString}</a>
    </span>
  );
};

ReviewsLinkComponent.propTypes = {
  updateReviews: PT.arrayOf(PT.object).isRequired,
  averageRating: PT.number.isRequired,
};

export default connect(mapStateToProps, null)(ReviewsLinkComponent);
