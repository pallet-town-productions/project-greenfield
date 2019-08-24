/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Answer from './Answer';

class List extends React.Component {
  constructor({ questions }) {
    super({ questions });
    this.helpfulClickHandler = () => {
      console.log('so very helpful');
    };
  }

  render() {
    const { questions } = this.props;
    return (
      <div>
        {questions.map((question) => (
          <Question
            key={question.question_id}
            data={question}
          />
        ))}
      </div>
    );
  }
}

List.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
