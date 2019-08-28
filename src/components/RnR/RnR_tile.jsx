import React from 'react';
import PT from 'prop-types';
import '../../styles/standard-styles.scss';
import '../../styles/RnR-styles.scss';
import StarRating from './RnR_StarRating';
import PhotoThumbnails from './RnR_tile_photos';
import TileBody from './RnR_tile_body';


class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVotedHelpfulness: false,
      hasReported: false,
    };
  }

  markAsHelpful() {
    const { hasVotedHelpfulness } = this.state;
    if (!hasVotedHelpfulness) {
      const { review } = this.props;
      // eslint-disable-next-line camelcase
      const { review_id } = review;
      // eslint-disable-next-line camelcase
      return fetch(`http://18.217.220.129/reviews/helpful/${review_id}`, {
        method: 'PUT',
      })
        .then(() => this.setState(() => ({ hasVotedHelpfulness: true })));
    }
    return 'done';
  }

  report() {
    const { hasReported } = this.state;
    if (!hasReported) {
      const { review } = this.props;
      // eslint-disable-next-line camelcase
      const { review_id } = review;
      // eslint-disable-next-line camelcase
      return fetch(`http://18.217.220.129/reviews/report/${review_id}`, {
        method: 'PUT',
      })
        .then(() => this.setState(() => ({ hasReported: true })));
    }
    return 'done';
  }

  render() {
    const { review } = this.props;
    let { body } = review;
    let { response } = review;
    const summary = review.summary.slice(0, 60);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const photos = review.photos.map((photo) => (
      <PhotoThumbnails photo={photo} />
    ));

    if (review.response !== 'null') {
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
          <p className="user">
            {review.reviewer_name}
            ,
          </p>
        </div>
        <p className="summary">{summary}</p>
        <div className="body"><TileBody body={body}/></div>
        <div className="recommend">{recommend}</div>
        <div>{response}</div>
        <div className="photos">{photos}</div>
        <div className="lower-row">
          <p className="lower">Helpful?</p>
          <div className="lower test" onClick={this.markAsHelpful.bind(this)} onKeyUp={this.markAsHelpful.bind(this)} tabIndex={0} role="link">Yes</div>
          <div className="lower helpfulness">
            (
            {review.helpfulness}
            )
          </div>
          <div className="lower test report" onClick={this.report.bind(this)} onKeyDown={this.report.bind(this)} tabIndex={0} role="link">Report</div>
        </div>
      </div>
    );
  }
}

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
    helpfulness: PT.number,
    recommend: PT.number,
    review_id: PT.number,
  }).isRequired,
};

export default Tile;
