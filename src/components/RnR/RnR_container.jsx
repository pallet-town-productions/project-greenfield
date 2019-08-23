import React from 'react';
import Sort from './RnR_sort_list';

class RnR extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props;
  }

  render() {
    return (
      <div>
        <h2>Ratings and Reviews</h2>
        <Sort />
      </div>
    );
  }
}

export default RnR;
