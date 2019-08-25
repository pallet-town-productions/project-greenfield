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
      currentView: 2,
    };
  }

  showMore() {
    const { currentView } = this.state;
    this.setState(() => ({ currentView: currentView + 2 }));
  }

  render() {
    const { updateReviews } = this.props;
    const { currentView } = this.state;
    return (
      <div>
        <h3 className="reviews-list">List of Reviews</h3>
        {updateReviews.slice(0, currentView).map((review) => <Tile review={review} key={review.review_id} />)}
        <button type="button" onClick={this.showMore.bind(this)}>More Reviews</button>
      </div>
    );
  }
}

List.propTypes = {
  updateReviews: PT.arrayOf(PT.object).isRequired,
};
const connectList = connect(mapStateToProps, null)(List);
export default connectList;
