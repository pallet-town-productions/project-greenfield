/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';


class List extends React.Component {
  constructor({ questions, helpfulClickHandler, reportClickHandler }) {
    super({ questions, helpfulClickHandler, reportClickHandler });
  }

  render() {
    const { questions, helpfulClickHandler, reportClickHandler } = this.props;
    return (
      <div>
        {questions.map((question) => (
          <Question
            key={`Q${question.question_id}`}
            helpfulClickHandler={helpfulClickHandler}
            data={question}
            reportClickHandler={reportClickHandler}
          />
        ))}
      </div>
    );
  }
}

List.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  helpfulClickHandler: PropTypes.func.isRequired,
  reportClickHandler: PropTypes.func.isRequired,
};

export default List;
