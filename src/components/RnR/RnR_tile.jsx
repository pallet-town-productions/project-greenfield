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
    };
  }

  showFullBody() {
    const { review } = this.props;
    this.setState(() => ({ body: review.body }));
  }

  render() {
    const { review } = this.props;
    const images = review.photos.map((photo) => (<img className="thumbnail" src={photo.url} alt="" />)).slice(0, 5);
    const summary = review.summary.slice(0, 60);
    let { body } = this.state;
    if (body.length > 249) {
      body = (
        <div>
          <p className="tile-body">{body}</p>
          <button type="button" onClick={this.showFullBody.bind(this)}>Show more</button>
        </div>
      );
    } else {
      body = <p className="tile-body">{body}</p>;
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
  }).isRequired,
};

export default Tile;
