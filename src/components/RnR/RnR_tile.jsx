import React, { Component } from 'react';
import PT from 'prop-types';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount() {
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        <div>{text}</div>
      </div>
    );
  }
}

Tile.propTypes = {
  text: PT.string.isRequired,
};

export default Tile;
