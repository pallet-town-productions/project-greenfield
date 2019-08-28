/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import PictureModal from './PictureModal';

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

    const { displayCount } = this.state;
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
      <div key={`da${data.answers}`}>
        {Object.values(data.answers).slice(0, displayCount).map((answer) => (
          <span key={`sa${answer.id}`} className="questionsAnswerTools">
            <p>
              {Object.values(data.answers)[0] === answer ? `A: ${answer.body}` : answer.body}
            </p>
            {answer.photos.length === 0 ? '' : answer.photos.map((photo) => (
              <PictureModal key={`pa${answer.id}`} photo={photo} answer={answer} />
            ))}
            <p>
              {`by ${answer.answerer_name}, ${new Date(answer.date).toLocaleDateString('en-us', options)} | Helpful? `}
              <button className="questionsHelpfulBtn" type="submit" onClick={() => helpfulClickHandler('qa', answer.id, 'answer')}>
                <u>Yes</u>
              </button>
              {` (${answer.helpfulness}) | `}
              <button className="questionsReportBtn" type="submit" onClick={() => reportClickHandler('qa', answer.id, 'answer')}>
                <u>Report</u>
              </button>
            </p>
            {data.answers[Object.keys(data.answers)[displayCount - 1]] === answer
              && displayCount < Object.keys(data.answers).length
              ? <button type="button" onClick={this.increaseDisplayCount}>Load More Answers...</button> : ''}
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
