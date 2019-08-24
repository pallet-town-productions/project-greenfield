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
    this.state = this.props;
  }

  render() {
    const { updateReviews } = this.props;
    if (updateReviews.length) {
      const reviewList = updateReviews[0].results;
      return (
        <div>
          <h3 className="reviews-list">List of Reviews</h3>
          {reviewList.map((review) => <Tile review={review} />)}
        </div>
      );
    }
    return (
      <div>
        <h3 className="reviews-list">List of Reviews</h3>
      </div>
    );
  }
}

List.propTypes = {
  updateReviews: PT.arrayOf(PT.object).isRequired,
};
const connectList = connect(mapStateToProps, null)(List);
export default connectList;
