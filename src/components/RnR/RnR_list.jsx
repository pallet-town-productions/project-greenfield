import React, { Component } from 'react';
import Tile from './RnR_tile';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    return (
      <div>
        <h3 className="reviews-list">List of Reviews</h3>
        <Tile />
        <Tile />
      </div>
    );
  }
}

export default List;
