/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import AddAnswer from './AddAnswer';
import Answer from './Answer';
import { recordClickData } from '../../util/util';


class Question extends React.Component {
  constructor(props, {
    data,
    counter,
    helpfulClickHandler,
    reportClickHandler,
    productName,
  }) {
    super(props, {
      data,
      counter,
      helpfulClickHandler,
      reportClickHandler,
      productName,
    });

    this.state = {
      clicked: false,
    };
  }

  render() {
    const {
      data,
      counter,
      productName,
      reportClickHandler,
      helpfulClickHandler,
    } = this.props;

    const {
      clicked,
    } = this.state;

    return (
      <div className="questions-qna-container">
        <div className="question-q-container">
          <div className="question-q-text-container">
            <p style={{
              fontSize: '22px',
              color: '#3B3B3B',
              marginBottom: '0',
              fontWeight: 'bold',
            }}
            >
              Q: &nbsp;
              {`${data.question_body}`}
            </p>
          </div>
          <span className="questions-q-tools">
            <span
              style={{
                fontSize: '12px',
                color: 'gray',
                margin: 0,
              }}
              id={`Q${data.question_id}`}
            >
              Helpful? &nbsp;
              <span
                className="qna-helpful-btn"
                role="presentation"
                id={`qna-helpful-btn-q${data.question_id}`}
                type="submit"
                onClick={() => {
                  if (!clicked) {
                    this.setState({ clicked: true }, () => {
                      recordClickData(document.getElementById(`qna-helpful-btn-q${data.question_id}`), 'qna');
                      helpfulClickHandler('qa', data.question_id, 'question');
                      const currentCount = document.getElementById(`QH${data.question_id}`).innerHTML;
                      document.getElementById(`QH${data.question_id}`).innerHTML = `(${Number(currentCount.slice(1, currentCount.length - 1)) + 1})`;
                    });
                  }
                }}
              >
                <u style={{ fontSize: '13px', color: 'gray' }}>
                  Yes
                </u>
              </span>
              &nbsp;
              <b style={{ fontWeight: 'normal' }} id={`QH${data.question_id}`}>
                (
                {data.question_helpfulness}
                )
              </b>
              &nbsp;&nbsp;&nbsp;
                |
              &nbsp;&nbsp;&nbsp;
              <AddAnswer
                data={data}
                productName={productName}
                counter={counter}
              />
            </span>
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
  counter: PropTypes.number.isRequired,
  helpfulClickHandler: PropTypes.func.isRequired,
  reportClickHandler: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
};

export default Question;
