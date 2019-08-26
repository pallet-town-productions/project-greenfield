/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ data, helpfulClickHandler }) => (
  <div className="questionsQuestionContainer">
    <p>
      {`Q: ${data.question_body}`}
    </p>
    <span className="questionsQuestionTools">
      <p>
        Helpful?
        <button className="questionsHelpfulBtn" type="submit" onClick={() => helpfulClickHandler('question', data.question_id)}>
          <u>
            Yes
          </u>
        </button>
        (
        {data.question_helpfulness}
        )
        |
        <button className="questionsAddAnswerBtn" type="submit">
          <u>
            Add Answer
          </u>
        </button>
      </p>
    </span>
    <div>
      {Object.values(data.answers).slice(0, 2).map((answer) => (
        <span className="questionsAnswerTools">
          <p>
            {Object.values(data.answers)[0] === answer ? `A: ${answer.body}` : answer.body}
          </p>
          <p>
            {`by ${answer.answerer_name}, ${new Date(answer.date).toLocaleDateString()} | Helpful? `}
            <button className="questionsHelpfulBtn" type="submit" onClick={() => helpfulClickHandler('answer', answer.id)}>
              <u>Yes</u>
            </button>
            {` (${answer.helpfulness}) | `}
            <button className="questionsReportBtn" type="submit">
              <u>Report</u>
            </button>
          </p>
        </span>
      ))}
    </div>
  </div>
);

Question.propTypes = {
  data: PropTypes.shape(PropTypes.object),
  helpfulClickHandler: PropTypes.func.isRequired,
};

Question.defaultProps = {
  data: {},
};

export default Question;
