import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  ...state,
});

export const StarBreakdown = (props) => {
  const { ratings } = props;
  const defaultRatings = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  const allRatings = { ...defaultRatings, ...ratings };
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const totalRatings = Object.values(allRatings)
    .reduce(reducer);

  return (
    <ul className="star-breakdown breakdown-list">
      <li className="star-breakdown-item">
        <a href="google.com">5 stars</a>
        <progress className="star-breakdown-bar bar" value={allRatings[5]} max={totalRatings} />
      </li>
      <li className="star-breakdown-item">
        <a href="google.com">4 stars</a>
        <progress className="star-breakdown-bar bar" value={allRatings[4]} max={totalRatings} />
      </li>
      <li className="star-breakdown-item">
        <a href="google.com">3 stars</a>
        <progress className="star-breakdown-bar bar" value={allRatings[3]} max={totalRatings} />
      </li>
      <li className="star-breakdown-item">
        <a href="google.com">2 stars</a>
        <progress className="star-breakdown-bar bar" value={allRatings[2]} max={totalRatings} />
      </li>
      <li className="star-breakdown-item">
        <a href="google.com">1 stars</a>
        <progress className="star-breakdown-bar bar" value={allRatings[1]} max={totalRatings} />
      </li>
    </ul>
  );
};

StarBreakdown.propTypes = {
  ratings: PropTypes.shape({
    1: PropTypes.number,
    2: PropTypes.number,
    3: PropTypes.number,
    4: PropTypes.number,
    5: PropTypes.number,
  }),
};

StarBreakdown.defaultProps = {
  ratings: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  },
};

const connectedStarBreakdown = connect(mapStateToProps, null)(StarBreakdown);
export default connectedStarBreakdown;
