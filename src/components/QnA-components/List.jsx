/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Answer from './Answer';

class List extends React.Component {
  constructor({ QnA, answers }) {
    super({ QnA, answers });
    this.state = {
      QnA,
      answers,
    };
    this.helpfulClickHandler = () => {
      console.log('so very helpful');
    };
  }

  render() {
    const { QnA, answers } = this.state;
    return (
      <div>
        {QnA.map((question) => (
          <div>
            {' '}
            <Question
              key={question.question_id}
              data={question}
            />
            {' '}
            <Answer
              key={question.question_date}
              helpfulClickHandler={this.helpfulClickHandler}
              data={question}
              answers={answers}
            />
            {' '}
          </div>
        ))}
      </div>
    );
  }
}

List.propTypes = {
  QnA: PropTypes.arrayOf.isRequired,
  answers: PropTypes.arrayOf.isRequired,
};

export default List;
