/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PT from 'prop-types';
import '../../styles/standard-styles.scss';
import '../../styles/RnR-styles.scss';
import StarRating from './RnR_StarRating';
import PhotoThumbnails from './RnR_tile_photos';
import TileBody from './RnR_tile_body';
import LowerBar from './RnR_tile_lower_bar';


const Tile = (props) => {
  const { review } = props;
  const { body } = review;
  let { response } = review;
  const summary = review.summary.slice(0, 60);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const photos = review.photos.map((photo) => (
    <PhotoThumbnails photo={photo} />
  ));

  if (review.response !== 'null' && review.response !== '') {
    response = (
      <div className="response">
        <p className="response-text-header">Response</p>
        <p className="response-text">{review.response}</p>
      </div>
    );
  } else {
    response = <div />;
  }

  let recommend;
  if (review.recommend) {
    recommend = <p className="recommend">&#10004; I recommend this product</p>;
  }

  return (
    <div className="tile">
      <div className="top-row">
        <StarRating className="star-rating" starCount={review.rating} />
        <p className="user">{new Date(review.date).toLocaleDateString('en-US', options)}</p>
        <p className="user">{review.reviewer_name},</p>
      </div>
      <p className="summary">{summary}</p>
      <div className="body"><TileBody body={body} /></div>
      <div className="recommend">{recommend}</div>
      <div>{response}</div>
      <div className="photos">{photos}</div>
      <LowerBar review={review} />
    </div>
  );
};

Tile.propTypes = {
  review: PT.shape({
    photos: PT.arrayOf(PT.object).isRequired,
    rating: PT.number,
    review: PT.string,
    date: PT.string,
    response: PT.string,
    reviewer_name: PT.string,
    summary: PT.string,
    body: PT.string,
    recommend: PT.number,
  }).isRequired,
};

export default Tile;
