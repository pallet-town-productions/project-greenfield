import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    return (
      <div>
        <ul>Im a tile!</ul>
        <ul>Im another tile! Woah!</ul>
      </div>
    );
  }
}

export default Tile;
