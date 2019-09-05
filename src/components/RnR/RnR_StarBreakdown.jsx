import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterReviews } from '../../actions/RnR-Actions/RnR-action';
import { recordClickData } from '../../util/util';

const mapStateToProps = (state) => ({
  ...state,
});

export class StarBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
    };
  }

  componentDidUpdate(prevState) {
    const { filters } = this.state;
    const { dispatch } = this.props;
    const { productData } = this.props;
    if (filters !== prevState.filters) {
      dispatch(filterReviews(filters));
    }
    if (prevState.productData.id !== productData.id) {
      this.resetFilters();
    }
  }

  resetFilters() {
    this.setState({ filters: [] });
  }

  handleClick(rating, e) {
    const { filters } = this.state;
    if (!filters.includes(parseInt(rating, 10))) {
      this.setState({ filters: filters.concat(parseInt(rating, 10)) });
    } else {
      this.setState({ filters: filters.filter((b) => b !== parseInt(rating, 10)) });
    }
    recordClickData(e.target, 'star_breakdown');
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
            onClick={(e) => this.handleClick(rating, e)}
            role="presentation"
          >
            <span
              id="star_filter"
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
  productData: PropTypes.shape({ id: PropTypes.number }).isRequired,
  dispatch: PropTypes.func.isRequired,
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
