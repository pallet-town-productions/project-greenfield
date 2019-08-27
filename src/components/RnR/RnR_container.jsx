import React from 'react';
import BreakdownContainer from './RnR_BreakdownContainer';
import Sort from './RnR_sort_list';

class RnR extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Ratings and Reviews</h2>
        <BreakdownContainer />
        <Sort />
      </div>
    );
  }
}

export default RnR;
