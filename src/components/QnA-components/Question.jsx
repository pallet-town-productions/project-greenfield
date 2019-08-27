/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import AddAnswer from './AddAnswer';


class Question extends React.Component {
  constructor({
    data,
    helpfulClickHandler,
    reportClickHandler,
    productName,
  }) {
    super({
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
          {Object.values(data.answers).slice(0, 2).map((answer) => (
            <span className="questionsAnswerTools">
              <p>
                {Object.values(data.answers)[0] === answer ? `A: ${answer.body}` : answer.body}
              </p>
              {answer.photos.length === 0 ? '' : answer.photos.map((photo) => (
                <img alt={`Uploaded by: ${answer.answerer_name}`} src={photo} className="thumbnail" />
              ))}
              <p>
                {`by ${answer.answerer_name}, ${new Date(answer.date).toLocaleDateString()} | Helpful? `}
                <button className="questionsHelpfulBtn" type="submit" onClick={() => helpfulClickHandler('qa', answer.id, 'answer')}>
                  <u>Yes</u>
                </button>
                {` (${answer.helpfulness}) | `}
                <button className="questionsReportBtn" type="submit" onClick={() => reportClickHandler('qa', answer.id, 'answer')}>
                  <u>Report</u>
                </button>
              </p>
              {Object.keys(data.answers).length > 2 && Object.values(data.answers)[0] !== answer ? <button type="button">Load More Answers...</button> : ''}
            </span>
          ))}
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
