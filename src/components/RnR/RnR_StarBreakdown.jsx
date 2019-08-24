import React from 'react';
import PropTypes from 'prop-types';


const StarBreakdown = ({ ratings }) => {
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
    <ul className="star-breakdown">
      <li>
        <a href="google.com">5 stars</a>
        <progress value={allRatings[5]} max={totalRatings} />
      </li>
      <li>
        <a href="google.com">4 stars</a>
        <progress value={allRatings[4]} max={totalRatings} />
      </li>
      <li>
        <a href="google.com">3 stars</a>
        <progress value={allRatings[3]} max={totalRatings} />
      </li>
      <li>
        <a href="google.com">2 stars</a>
        <progress value={allRatings[2]} max={totalRatings} />
      </li>
      <li>
        <a href="google.com">1 stars</a>
        <progress value={allRatings[1]} max={totalRatings} />
      </li>
    </ul>
  );
};


StarBreakdown.propTypes = {
  ratings: PropTypes.shape({}).isRequired,
};


export default StarBreakdown;
