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
      <div className="questions-qna-container">
        <div className="question-q-container">
          <div className="question-q-text-container">
            <p style={{
              fontSize: '22px',
              color: '#3B3B3B',
              letterSpacing: '0.5px',
              marginBottom: '0',
            }}
            >
              {`Q: ${data.question_body}`}
            </p>
          </div>
          <span className="questions-q-tools">
            <p style={{ fontSize: '14px', color: 'gray', fontFamily: 'Arial' }} id={`Q${data.question_id}`}>
              Helpful?
              <button className="questions-helpful-btn questions-clear-btn" type="submit" onClick={() => helpfulClickHandler('qa', data.question_id, 'question')}>
                <u style={{ fontSize: '13px', color: 'gray' }}>
                  Yes
                </u>
              </button>
              {`(${data.question_helpfulness})`}
              &nbsp;&nbsp;&nbsp;
                |
              &nbsp;&nbsp;
              <AddAnswer data={data} productName={productName} />
            </p>
          </span>
        </div>
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
