import React from 'react';
import PT from 'prop-types';
import '../../styles/standard-styles.scss';
import '../../styles/RnR-styles.scss';

const Tile = (props) => {
  const { review } = props;
  console.log(review.summary.length)
  const images = review.photos.map((photo) => (<img className="thumbnail" src={photo.url} alt="" />)).slice(0, 5);
  const summary = review.summary.slice(0, 60);
  console.log(summary.length)
  return (
    <div>
      <p>{review.rating}</p>
      <p>
        {review.reviewer_name}
        {new Date(review.date).toLocaleDateString()}
      </p>
      <p>{summary}</p>
      <p>{review.body}</p>
      <p>{images}</p>
      <p>
        Helpful?
        (
        {review.helpfulness}
        )
      </p>
      <p>Report</p>
    </div>
  );
};

Tile.propTypes = {
  review: PT.shape({
    photos: PT.arrayOf(PT.object).isRequired,
    rating: PT.number,
    review: PT.string,
    date: PT.string,
    reviewer_name: PT.string,
    summary: PT.string,
    body: PT.string,
    helpfulness: PT.number,
  }).isRequired,
};

export default Tile;
