import React, { Component } from 'react';

class RatingBreakdown extends Component {
  constructor(props) {
    super(props);

    this.state = this.props;
  }

  render() {
    return (
      <div>
        <h2 className="rating-average">
          3.5
          <span className="star-rating">
           *****
          </span>
        </h2>
        <p className="percent-recommended">100% of reviews recommend this product</p>
        <ul className="star-breakdown">
          <li>
            <a href="google.com">5 stars</a>
            -------___
          </li>
          <li>
            <a href="google.com">4 stars</a>
            -------___
          </li>
          <li>
            <a href="google.com">3 stars</a>
            -------___
          </li>
          <li>
            <a href="google.com">2 stars</a>
            -------___
          </li>
          <li>
            <a href="google.com">1 stars</a>
            -------___
          </li>
        </ul>
      </div>
    );
  }
}

export default RatingBreakdown;
