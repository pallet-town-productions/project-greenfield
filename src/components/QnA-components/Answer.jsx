/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';


const Answer = ({ answer, helpfulClickHandler }) => (
  <div>
    <p>{console.log(answer)}</p>
  </div>
);

Answer.propTypes = {
  answer: PropTypes.shape(PropTypes.object),
  helpfulClickHandler: PropTypes.func,
};

Answer.defaultProps = {
  answer: {},
  helpfulClickHandler: () => {},
};

export default Answer;
