import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from './RnR_tile';

const mapStateToProps = (state) => ({
  ...state,
});

class List extends Component {


  componentDidMount() {
    const {relatedReducer} = this.props;
    console.log(relatedReducer);
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

const connectList = connect(mapStateToProps, null)(List);
export default connectList;
