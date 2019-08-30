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
    const { updateReviews } = this.props;
    this.state = {
      currentView: 2,
      reviewsToShow: updateReviews,
    };
  }

  showMore() {
    const { currentView } = this.state;
    const { updateReviews } = this.props;
    if (currentView <= updateReviews.length) {
      this.setState(() => ({ currentView: currentView + 2 }));
    }
  }

  render() {
    const { updateReviews } = this.props;
    const { currentView } = this.state;
    let { reviewsToShow } = this.state;
    const { updateStarReviews } = this.props;
    const { filteredReviews } = updateStarReviews;

    let button;
    if (reviewsToShow.length > currentView) {
      button = <button type="button" onClick={this.showMore.bind(this)}>More Reviews</button>;
    } else {
      button = <div />;
    }

    const filter = [];

    filteredReviews.forEach((arr) => {
      if (arr.length > 1) {
        arr.forEach((review) => {
          if (!filter.some((e) => e.review_id === review.review_id)) { filter.push(review); }
        });
      } else if (arr[0] && !filter.some((e) => e.review_id === arr[0].review_id)) { filter.push(arr[0]); }
    });
    
    let reviewsToMap = updateReviews;
    if (filter.length) reviewsToMap = filter;
    console.log(reviewsToMap)
    return (
      <div>
        {/* .slice(0, currentView) */}
        {reviewsToMap.map((review) => (
          <Tile
            review={review}
            key={review.review_id}
          />
        ))}
        {button}
      </div>
    );
  }
}

List.propTypes = {
  updateReviews: PT.arrayOf(PT.object).isRequired,
};
const connectList = connect(mapStateToProps, null)(List);
export default connectList;
