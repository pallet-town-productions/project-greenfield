import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterReviews, updateReviewsToRender } from '../../actions/RnR-Actions/RnR-action';

const mapStateToProps = (state) => ({
  ...state,
});

class StarBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: false,
    };
  }

  handleClick(rating) {
    const { dispatch, productId } = this.props;
    const { filtered } = this.state;
    fetch(`http://18.217.220.129/reviews/${productId}/list`)
      .then((data) => data.json())
      .then((data) => data.results.filter((review) => review.rating === parseInt(rating, 10)))
      .then((data) => {
        if (filtered) {
          dispatch(filterReviews(data));
        } else {
          dispatch(updateReviewsToRender(data));
          dispatch(filterReviews(data));
          this.setState((prevState) => ({
            filtered: !prevState.filtered,
          }));
        }
      });
  }

  render() {
    const { allRatings, totalRatings } = this.props;
    const sortedList = Object.keys(allRatings)
      .sort((a, b) => b - a)
      .map((rating) => (
        <li
          className="star-breakdown-item"
          key={rating}
        >
          <div
            className="star-breakdown-div"
            onClick={() => this.handleClick(rating)}
            role="presentation"
          >
            <span
              className="star-breakdown-span"
            >
              {rating}
            &nbsp;stars
            </span>
            <progress
              className="star-breakdown-bar bar"
              value={allRatings[rating]}
              max={totalRatings}
            />
          </div>
        </li>
      ));
    return (
      <ul className="star-breakdown breakdown-list">{sortedList}</ul>
    );
  }
}

StarBreakdown.propTypes = {
  allRatings: PropTypes.shape({
    1: PropTypes.number,
    2: PropTypes.number,
    3: PropTypes.number,
    4: PropTypes.number,
    5: PropTypes.number,
  }),
  totalRatings: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired,
};

StarBreakdown.defaultProps = {
  allRatings: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  },
  totalRatings: 0,
};

const connectedStarBreakdown = connect(mapStateToProps, null)(StarBreakdown);
export default connectedStarBreakdown;
