/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PT from 'prop-types';
import { recordClickData } from '../../util/util';
import '../../styles/standard-styles.scss';
import '../../styles/RnR-styles.scss';

const apiurl = process.env.REACT_APP_APIURL || '123.456.789.1011';

class LowerBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVotedHelpfulness: false,
      hasReported: false,
    };
  }

  markHelpful(e) {
    const { hasVotedHelpfulness } = this.state;
    recordClickData(e.target, 'review_is_helpful');
    if (!hasVotedHelpfulness) {
      const { review } = this.props;
      // eslint-disable-next-line camelcase
      const { review_id } = review;
      // eslint-disable-next-line camelcase
      return fetch(`${apiurl}/reviews/helpful/${review_id}`, {
        method: 'PUT',
      })
        .then(() => this.setState(() => ({ hasVotedHelpfulness: true })));
    }
    return 'done';
  }

  report(e) {
    const { hasReported } = this.state;
    recordClickData(e.target, 'report_review');
    if (!hasReported) {
      const { review } = this.props;
      // eslint-disable-next-line camelcase
      const { review_id } = review;
      // eslint-disable-next-line camelcase
      return fetch(`${apiurl}/reviews/report/${review_id}`, {
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
        <div id="helpfulness" className="lower test" onClick={this.markHelpful.bind(this)} onKeyUp={this.markHelpful.bind(this)} tabIndex={0} role="link">Yes</div>
        <div className="lower helpfulness">
          ({review.helpfulness})
        </div>
        &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        <div id="report" className="lower test report" onClick={this.report.bind(this)} onKeyDown={this.report.bind(this)} tabIndex={0} role="link">Report</div>
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
