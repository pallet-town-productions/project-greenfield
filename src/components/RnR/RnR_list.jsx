import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { updateReviewNumber } from '../../actions/RnR-Actions/RnR-action';
import { recordClickData } from '../../util/util';
import Tile from './RnR_tile';
import WriteReviewButton from './WriteReview/WriteReviewButton';

const mapStateToProps = (state) => ({
  ...state,
});

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 2,
    };
  }

  componentDidUpdate(prevState) {
    const { productData } = this.props;
    if (prevState.productData.id !== productData.id) {
      this.resetView();
    }
  }

  resetView() {
    this.setState({ currentView: 2 });
  }

  showMore() {
    const { currentView } = this.state;
    const { updateReviews } = this.props;
    if (currentView <= updateReviews.length) {
      this.setState(() => ({ currentView: currentView + 2 }));
    }
    recordClickData(e.target, 'sort_list');
  }

  render() {
    const { updateReviews } = this.props;
    const { currentView } = this.state;
    const { updateStarReviews } = this.props;
    const { dispatch } = this.props;
    let button;
    let reviewsToRender = updateReviews;

    if (updateStarReviews.length) {
      reviewsToRender = updateReviews.filter((review) => updateStarReviews.includes(review.rating));
    }

    dispatch(updateReviewNumber(reviewsToRender.length));

    if (updateReviews.length > currentView) {
      button = <button type="button" onClick={this.showMore.bind(this)}>More Reviews</button>;
    } else {
      button = <div />;
    }

    return (
      <div className="list">
        {reviewsToRender.slice(0, currentView).map((review) => (
          <Tile
            review={review}
            key={review.review_id}
          />
        ))}
        {button}
        <WriteReviewButton />
      </div>
    );
  }
}

List.propTypes = {
  updateReviews: PT.arrayOf(PT.object).isRequired,
  updateStarReviews: PT.arrayOf(PT.number).isRequired,
  productData: PT.shape({ id: PT.number }).isRequired,
  dispatch: PT.func.isRequired,
};
const connectList = connect(mapStateToProps, null)(List);
export default connectList;
