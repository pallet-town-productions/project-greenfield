/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import PictureModal from './PictureModal';
import { recordClickData } from '../../util/util';

class Answer extends React.Component {
  constructor(props, {
    data,
    helpfulClickHandler,
    reportClickHandler,
  }) {
    super(props, {
      data,
      helpfulClickHandler,
      reportClickHandler,
    });

    this.state = {
      displayCount: 2,
      clicked: false,
    };

    this.increaseDisplayCount = () => {
      const { displayCount } = this.state;
      this.setState({ displayCount: displayCount + 2 });
    };
  }

  render() {
    const {
      data,
      helpfulClickHandler,
      reportClickHandler,
    } = this.props;

    const {
      displayCount,
      clicked,
    } = this.state;
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
      <div key={`da${data.answers}`} className="qna-answer-container">
        {Object.values(data.answers).slice(0, displayCount).map((answer) => (
          <span key={`sa${answer.id}`} className="questionsAnswerTools">
            <p style={{ fontSize: '18px', marginTop: '15px', marginBottom: '7px' }}>
              {Object.values(data.answers)[0] === answer ? (
                <span>
                  <b style={{ marginRight: '1px' }}>
                    A:
                    &nbsp;
                  </b>
                  <span className="qna-answer-body">
                    {answer.body}
                  </span>
                </span>
              )
                : (
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {answer.body}
                  </span>
                )}
            </p>
            {answer.photos.length === 0 ? '' : answer.photos.map((photo) => (
              <PictureModal key={`pa${answer.id + Math.random()}`} photo={photo} answer={answer} />
            ))}
            <p
              style={{
                marginTop: '7px',
                fontSize: '12px',
                marginLeft: '3px',
                marginBottom: 0,
                color: 'gray',
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              by
              {' '}
              {answer.answerer_name === 'Seller' ? <b style={{ color: 'black' }}>Seller</b> : answer.answerer_name}
              {`, ${new Date(answer.date).toLocaleDateString('en-us', options)}`}
              &nbsp;&nbsp;&nbsp;&nbsp;
              | &nbsp;&nbsp;&nbsp; Helpful? &nbsp;
              <span
                className="qna-helpful-btn"
                id={`qna-helpful-btn${answer.id}`}
                role="presentation"
                type="submit"
                onClick={() => {
                  if (!clicked) {
                    this.setState({ clicked: true }, () => {
                      recordClickData(document.getElementById(`qna-helpful-btn${answer.id}`), 'qna');
                      helpfulClickHandler('qa', answer.id, 'answer');
                      const currentCount = document.getElementById(`A${answer.id}`).innerHTML;
                      document.getElementById(`A${answer.id}`).innerHTML = `(${Number(currentCount.slice(1, currentCount.length - 1)) + 1})`;
                    });
                  }
                }}
              >
                <u style={{ color: 'gray' }}>Yes</u>
              </span>
              &nbsp;
              <b
                style={{ fontWeight: 'normal' }}
                id={`A${answer.id}`}
              >
                (
                {answer.helpfulness}
                )
              </b>
              &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
              <span
                className="qna-report-btn"
                id={`qna-report-btn${answer.id}`}
                role="presentation"
                type="submit"
                onClick={(e) => {
                  recordClickData(e.target, 'qna');
                  reportClickHandler('qa', answer.id, 'answer');
                }}
              >
                <u style={{ color: 'gray' }}>Report</u>
              </span>
            </p>
            {data.answers[Object.keys(data.answers)[displayCount - 1]] === answer
              && displayCount < Object.keys(data.answers).length
              ? (
                <div style={{ marginTop: '25px', marginLeft: '1px' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    role="presentation"
                    id={`qna-load-more-a${answer.id}`}
                    onKeyPress={this.increaseDisplayCount}
                    onClick={() => {
                      recordClickData(document.getElementById(`qna-load-more-a${answer.id}`), 'qna');
                      this.increaseDisplayCount();
                    }}
                    className="questions-clear-btn"
                  >
                    <b>
                      LOAD MORE ANSWERS
                    </b>
                  </span>
                </div>
              )
              : ''}
          </span>
        ))}
      </div>
    );
  }
}

Answer.propTypes = {
  data: PropTypes.shape({
    question_body: PropTypes.string.isRequired,
    question_id: PropTypes.number.isRequired,
    question_helpfulness: PropTypes.number.isRequired,
    answers: PropTypes.shape({}).isRequired,
  }).isRequired,
  helpfulClickHandler: PropTypes.func.isRequired,
  reportClickHandler: PropTypes.func.isRequired,
};

export default Answer;
