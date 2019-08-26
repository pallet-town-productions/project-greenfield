/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';


class List extends React.Component {
  constructor({ questions }) {
    super({ questions });
    this.helpfulClickHandler = (type, id) => {
      fetch(`http://18.217.220.129/qa/${type}/${id}/helpful`, {
        method: 'PUT',
      });
    };
  }

  render() {
    const { questions } = this.props;
    return (
      <div>
        {questions.map((question) => (
          <Question
            key={question.question_id}
            helpfulClickHandler={this.helpfulClickHandler}
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
