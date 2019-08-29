/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import AddAnswer from './AddAnswer';
import Answer from './Answer';


class Question extends React.Component {
  constructor(props, {
    data,
    helpfulClickHandler,
    reportClickHandler,
    productName,
  }) {
    super(props, {
      data,
      helpfulClickHandler,
      reportClickHandler,
      productName,
    });
  }

  render() {
    const {
      data,
      productName,
      reportClickHandler,
      helpfulClickHandler,
    } = this.props;

    return (
      <div className="questionsQuestionContainer">
        <p>
          {`Q: ${data.question_body}`}
        </p>
        <span className="questionsQuestionTools">
          <p id={`Q${data.question_id}`}>
            Helpful?
            <button className="questionsHelpfulBtn" type="submit" onClick={() => helpfulClickHandler('qa', data.question_id, 'question')}>
              <u>
                Yes
              </u>
            </button>
            (
            {data.question_helpfulness}
            )
            |
            <AddAnswer data={data} productName={productName} />
          </p>
        </span>
        <div>
          <Answer
            data={data}
            reportClickHandler={reportClickHandler}
            helpfulClickHandler={helpfulClickHandler}
          />
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  data: PropTypes.shape({
    question_body: PropTypes.string.isRequired,
    question_id: PropTypes.number.isRequired,
    question_helpfulness: PropTypes.number.isRequired,
    answers: PropTypes.shape({}).isRequired,
  }).isRequired,
  helpfulClickHandler: PropTypes.func.isRequired,
  reportClickHandler: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
};

export default Question;
