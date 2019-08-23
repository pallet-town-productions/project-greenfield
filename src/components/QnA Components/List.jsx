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
            <Question data={question} />
            {' '}
            <Answer data={question} />
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
