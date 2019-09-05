import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import List from './RnR_list';
import { updateReviewsToRender } from '../../actions/RnR-Actions/RnR-action';
import '../../styles/standard-styles.scss';
import '../../styles/RnR-styles.scss';

const apiurl = process.env.REACT_APP_APIURL || '123.456.789.1011'

const mapStateToProps = (state) => ({
  ...state,
});

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.getAllReviews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productId !== this.props.productId) {
      this.getAllReviews();
    }
  }

  getAllReviews() {
    const currentView = document.getElementById('sort-selector').value;
    const { productId, dispatch } = this.props;
    fetch(`${apiurl}/reviews/${productId}/list`)
      .then((response) => {
        if (response.status !== 200) { console.log('problem'); }
        return response.json();
      })
      .then((data) => {
        if (currentView === 'helpfulness') {
          return data.results.sort((a, b) => ((a.helpfulness < b.helpfulness) ? 1 : -1));
        } if (currentView === 'date') {
          return data.results.sort((a, b) => ((a.date < b.date) ? 1 : -1));
        }
        return data.results.sort((a, b) => {
          if (a.helpfulness > 4 || b.helpfulness > 4) {
            return 1;
          }
          if (new Date().getTime() - Date.parse(a.date) < 6048000000
          || new Date().getTime() - Date.parse(b.date) < 6048000000) {
            return 1;
          }
          return (a.date < b.date) ? 1 : -1;
        });
      })
      .then((info) => { console.log(info); dispatch(updateReviewsToRender(info)); });
  }

  render() {
    const { updateReviewNumber } = this.props;
    const upperStr = `${updateReviewNumber} reviews, sorted by `;
    return (
      <div className="tile-container">
        <form className="sort-list">
          {upperStr}
          <select id="sort-selector" className="selector" onChange={this.getAllReviews.bind(this)}>
            <option value="relevance">Relevance</option>
            <option value="date">Date</option>
            <option value="helpfulness">Helpfulness</option>
          </select>
        </form>
        <List />
      </div>
    );
  }
}

Sort.propTypes = {
  productId: PT.number.isRequired,
  updateReviewNumber: PT.oneOfType([PT.number, PT.string]).isRequired,
  dispatch: PT.func.isRequired,
};

const connectSort = connect(mapStateToProps, null)(Sort);
export default connectSort;
