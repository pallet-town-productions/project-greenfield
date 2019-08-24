import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import Tile from './RnR_tile';

const mapStateToProps = (state) => ({
  ...state,
});

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [],
      reviewMeta: [],
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    setTimeout(() => {
      const { updateReviews } = this.props;
      this.setState({
        reviewList: updateReviews[0],
        reviewMeta: updateReviews[1],
      });
    }, 400);
  }

  render() {
    return (
      <div>
        <h3 className="reviews-list">List of Reviews</h3>
        <Tile reviewList={this.state.reviewList} reviewMeta={this.state.reviewMeta}/>
        <Tile />
      </div>
    );
  }
}

List.propTypes = {
  updateReviews: PT.arrayOf(PT.object).isRequired,
};

const connectList = connect(mapStateToProps, null)(List);
export default connectList;
