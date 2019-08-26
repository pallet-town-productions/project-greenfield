import React from 'react';
import PT from 'prop-types';
import '../../styles/standard-styles.scss';
import '../../styles/RnR-styles.scss';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    const { review } = this.props;
    this.state = {
      body: review.body.slice(0, 250),
      hasVotedHelpfulness: false,
      hasReported: false,
    };
  }

  showFullBody() {
    const { review } = this.props;
    this.setState(() => ({ body: review.body }));
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
    const images = review.photos.map((photo) => (<img className="thumbnail" src={photo.url} alt="" />)).slice(0, 5);
    const summary = review.summary.slice(0, 60);
    let { body } = this.state;

    if (body.length > 249) {
      body = (
        <div>
          <p className="tile-body">{body.slice(0, 1000)}</p>
          <button type="button" onClick={this.showFullBody.bind(this)}>Show more</button>
        </div>
      );
    } else { body = <p className="tile-body">{body.slice(0, 1000)}</p>; }

    let recommend;
    if (review.recommend) {
      recommend = <p className="recommend">I recommend this product</p>;
    }

    return (
      <div>
        <p>{review.rating}</p>
        <p>
          {review.reviewer_name}
          {new Date(review.date).toLocaleDateString()}
        </p>
        <p className="tile-summary">{summary}</p>
        {body}
        {recommend}
        <p>{images}</p>
        <div className="helpful">
          <p>Helpful?</p>
          <div className="helpful-link" onClick={this.markAsHelpful.bind(this)} onKeyUp={this.markAsHelpful.bind(this)} tabIndex={0} role="link">Yes</div>
          (
          {review.helpfulness}
          )
          <div className="report-link" onClick={this.report.bind(this)} onKeyDown={this.report.bind(this)} tabIndex={0} role="link">Report</div>
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
    reviewer_name: PT.string,
    summary: PT.string,
    body: PT.string,
    helpfulness: PT.number,
    recommend: PT.number,
    review_id: PT.number,
  }).isRequired,
  // productId: PT.number.isRequired,
};

export default Tile;
