import React, { Component } from 'react';
import StarRating from './RnR_StarRating';

class RatingBreakdown extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2 className="rating-average">
          3.5
          <StarRating starCount={3.5} />
        </h2>
        <p className="percent-recommended">100% of reviews recommend this product</p>
        <ul className="star-breakdown">
          <li>
            <a href="google.com">5 stars</a>
            <progress value="70" max="100" />
          </li>
          <li>
            <a href="google.com">4 stars</a>
            <progress value="90" max="100" />
          </li>
          <li>
            <a href="google.com">3 stars</a>
            <progress value="60" max="100" />
          </li>
          <li>
            <a href="google.com">2 stars</a>
            <progress value="30" max="100" />
          </li>
          <li>
            <a href="google.com">1 stars</a>
            <progress value="40" max="100" />
          </li>
        </ul>
      </div>
    );
  }
}

export default RatingBreakdown;
