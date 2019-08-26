/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';


class List extends React.Component {
  constructor({ questions, helpfulClickHandler }) {
    super({ questions, helpfulClickHandler });
  }

  render() {
    const { questions, helpfulClickHandler } = this.props;
    return (
      <div>
        {questions.map((question) => (
          <Question
            key={question.question_id}
            helpfulClickHandler={helpfulClickHandler}
            data={question}
          />
        ))}
      </div>
    );
  }
}

List.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  helpfulClickHandler: PropTypes.func.isRequired,
};

export default List;
