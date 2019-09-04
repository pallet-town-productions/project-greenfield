import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import StarRating from '../../RnR/RnR_StarRating';

function mapStateToProps(st) {
  const { updateReviews, averageRating } = st;
  return { updateReviews, averageRating };
}

function ReviewsLinkComponent({ updateReviews, averageRating }) {
  let readReviewsString;
  switch (updateReviews.length) {
    case 0:
      readReviewsString = '';
      break;
    case 1:
      readReviewsString = `Read ${updateReviews.length} review`;
      break;
    default:
      readReviewsString = `Read all ${updateReviews.length} reviews`;
  }

  return (
    <span>
      <StarRating starCount={averageRating} />
      <a id="reviewsLink" href="#scrollRnR">{readReviewsString}</a>
    </span>
  );
}

ReviewsLinkComponent.propTypes = {
  updateReviews: PT.arrayOf(PT.object).isRequired,
  averageRating: PT.number.isRequired,
};

export default connect(mapStateToProps, null)(ReviewsLinkComponent);
