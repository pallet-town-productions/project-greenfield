import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import StarRating from '../../RnR/RnR_StarRating';

const mapStateToProps = function (state) {
  const { updateReviews } = state;
  return { updateReviews };
}

const ReviewsLinkComponent = function ({ updateReviews }) {
  let readReviewsString = function (numReviews) {
    switch (numReviews) {
      case 0:
        return '';
      case 1:
        return `Read ${numReviews} review`;
      default:
        return `Read all ${numReviews} reviews`;
    }
  }(updateReviews.length);

  return (
    <span>
      <StarRating starCount={0.75} />
      <a href="#scrollRnR">{readReviewsString}</a>
    </span>
  );
};

ReviewsLinkComponent.propTypes = {
  updateReviews: PT.arrayOf(PT.object).isRequired,
}

export default connect(mapStateToProps, null)(ReviewsLinkComponent);