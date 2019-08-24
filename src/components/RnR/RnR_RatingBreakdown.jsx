import React, { Component } from 'react';
import StarRating from './RnR_StarRating';
import StarBreakdown from './RnR_StarBreakdown';

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
        <StarBreakdown ratings={{ 1: 5, 4: 7 }} />
      </div>
    );
  }
}

export default RatingBreakdown;
