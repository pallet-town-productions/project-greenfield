import React from 'react';
import PT from 'prop-types';

const Tile = (props) => {
  const { review } = props;
  return (
    <div>
      <div />
      <div>{review.rating}</div>
      <div>
        {review.reviewer_name}
        {review.date}
      </div>
      <div>{review.summary}</div>
      <div>{review.body}</div>
      <div>
        Helpful?
        (
        {review.helpfulness}
        )
      </div>
      <div>Report</div>

    </div>
  );
};

Tile.propTypes = {
  review: PT.string.isRequired,
};

export default Tile;
