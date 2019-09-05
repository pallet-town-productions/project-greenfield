import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import StarRating from '../../RnR/RnR_StarRating';
import { recordClickData } from '../../../util/util';

const OWNER = 'Bailey';

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
      <a
        id="reviewsLink"
        href="#scrollRnR"
        onClick={(e) => {
          recordClickData(e.currentTarget, OWNER);
        }}
      >
        {readReviewsString}
      </a>
    </span>
  );
}

ReviewsLinkComponent.propTypes = {
  updateReviews: PT.arrayOf(PT.object).isRequired,
  averageRating: PT.number.isRequired,
};

export default connect(mapStateToProps, null)(ReviewsLinkComponent);
