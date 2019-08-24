import React from 'react';
import PT from 'prop-types';
import '../../styles/standard-styles.scss';
import '../../styles/RnR-styles.scss';

const Tile = (props) => {
  const { review } = props;
  const images = review.photos.map((photo) => (<img className="thumbnail" src={photo.url} alt="" />));
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
      <div>{images}</div>
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
