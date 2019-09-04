/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';


class List extends React.Component {
  constructor(props, {
    questions,
    helpfulClickHandler,
    reportClickHandler,
    productName,
  }) {
    super(props, {
      questions,
      helpfulClickHandler,
      reportClickHandler,
      productName,
    });
  }

  render() {
    const {
      questions,
      helpfulClickHandler,
      reportClickHandler,
      productName,
    } = this.props;

    return (
      <div>
        {questions.map((question, counter) => (
          <Question
            counter={counter + 1}
            key={`Q${question.question_id}`}
            helpfulClickHandler={helpfulClickHandler}
            productName={productName}
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
  productName: PropTypes.string.isRequired,
};

export default List;
