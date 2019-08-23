import React from 'react';
import List from './RnR_list';
import RatingBreakdown from './RnR_RatingBreakdown';

class RnR extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props;
  }

  render() {
    return (
      <div>
        <h2>Ratings and Reviews</h2>
        <RatingBreakdown />
        <List />
      </div>
    );
  }
}

export default RnR;
