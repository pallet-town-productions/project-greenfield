/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PT from 'prop-types';
import '../../styles/standard-styles.scss';
import '../../styles/RnR-styles.scss';

class LowerBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVotedHelpfulness: false,
      hasReported: false,
    };
  }

  markHelpful() {
    const { hasVotedHelpfulness } = this.state;
    if (!hasVotedHelpfulness) {
      const { review } = this.props;
      // eslint-disable-next-line camelcase
      const { review_id } = review;
      // eslint-disable-next-line camelcase
      return fetch(`http://18.217.220.129/reviews/helpful/${review_id}`, {
        method: 'PUT',
      })
        .then(() => this.setState(() => ({ hasVotedHelpfulness: true })));
    }
    return 'done';
  }

  report() {
    const { hasReported } = this.state;
    if (!hasReported) {
      const { review } = this.props;
      // eslint-disable-next-line camelcase
      const { review_id } = review;
      // eslint-disable-next-line camelcase
      return fetch(`http://18.217.220.129/reviews/report/${review_id}`, {
        method: 'PUT',
      })
        .then(() => this.setState(() => ({ hasReported: true })))
        .then(() => alert('Thank you for your feedback'));
    }
    return 'done';
  }

  render() {
    const { review } = this.props;
    return (
      <div className="lower-row">
        <p className="lower">Helpful?</p>
        <div className="lower test" onClick={this.markHelpful.bind(this)} onKeyUp={this.markHelpful.bind(this)} tabIndex={0} role="link">Yes</div>
        <div className="lower helpfulness">
          ({review.helpfulness})
        </div>
        &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        <div className="lower test report" onClick={this.report.bind(this)} onKeyDown={this.report.bind(this)} tabIndex={0} role="link">Report</div>
        <hr />
      </div>
    );
  }
}

LowerBar.propTypes = {
  review: PT.shape({
    helpfulness: PT.number.isRequired,
    review_id: PT.number.isRequired,
  }).isRequired,
};

export default LowerBar;
