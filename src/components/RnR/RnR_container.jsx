import React from 'react';
import ConnectedBreakdownContainer from './RnR_BreakdownContainer';
import Sort from './RnR_sort_list';

class RnR extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2 id="scrollRnR">Ratings and Reviews</h2>
        <ConnectedBreakdownContainer />
        <Sort />
      </div>
    );
  }
}

export default RnR;
