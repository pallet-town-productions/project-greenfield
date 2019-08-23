import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Answer from './Answer';

class List extends React.Component {
  constructor({ QnA }) {
    super({ QnA });
    this.state = {
      QnA,
    };
  }

  render() {
    const { QnA } = this.state;
    return (
      <div>
        {QnA.map((question) => (
          <div>
            {' '}
            <Question key={question.question_id} data={question} />
            {' '}
            <Answer key={question.question_date} data={question} />
            {' '}
          </div>
        ))}
      </div>
    );
  }
}

List.propTypes = {
  QnA: PropTypes.arrayOf.isRequired,
};

export default List;
