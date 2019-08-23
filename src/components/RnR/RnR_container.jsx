import React from 'react';
<<<<<<< HEAD
import List from './RnR_list';
import RatingBreakdown from './RnR_RatingBreakdown';
=======
import Sort from './RnR_sort_list';
>>>>>>> written a fetch to get reviews

class RnR extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props;
  }

  render() {
    return (
      <div>
        <h2>Ratings and Reviews</h2>
<<<<<<< HEAD
        <RatingBreakdown />
        <List />
=======
        <Sort />
>>>>>>> written a fetch to get reviews
      </div>
    );
  }
}

export default RnR;
