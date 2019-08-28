import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  ...state,
});

export const StarBreakdown = (props) => {
  const { allRatings, totalRatings } = props;
  const sortedList = Object.keys(allRatings)
    .sort((a, b) => b - a)
    .map((rating) => (
      <li
        className="star-breakdown-item"
        key={rating}
      >
        <div
          className="star-breakdown-div"
          onClick={() => {}}
          onKeyPress={() => {}}
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
};

StarBreakdown.propTypes = {
  allRatings: PropTypes.shape({
    1: PropTypes.number,
    2: PropTypes.number,
    3: PropTypes.number,
    4: PropTypes.number,
    5: PropTypes.number,
  }),
  totalRatings: PropTypes.number,
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
