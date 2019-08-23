/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ answers, helpfulClickHandler }) => (
  <div>
    {answers.results.map((answer) => (
      <div>
        <p>
          {answer.body}
        </p>
        <button className="questionsHelpfulBtn" type="submit" onClick={helpfulClickHandler}>Helpful?</button>
      </div>
    ))}
  </div>
);

Answer.propTypes = {
  answers: PropTypes.arrayOf.isRequired,
  helpfulClickHandler: PropTypes.func.isRequired,
};
export default Answer;
