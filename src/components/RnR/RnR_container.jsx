import React from 'react';
import List from './RnR_list';

class RnR extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props;
  }

  render() {
    return (
      <div>
        <h2>Ratings and Reviews</h2>
        <List />
      </div>
    );
  }
}

export default RnR;
