/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ data }) => (
  <div>
    <p>
      {`Q: ${data.question_body}`}
    </p>
  </div>
);

Question.propTypes = {
  data: PropTypes.arrayOf.isRequired,
};

export default Question;
