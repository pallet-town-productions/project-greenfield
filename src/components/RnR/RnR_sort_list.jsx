import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import List from './RnR_list';
import updateReviewsToRender from '../../actions/RnR-Actions/RnR-action';

const mapStateToProps = (state) => ({
  ...state,
});

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'relevance',
    };
  }

  componentDidMount() {
    this.getAllReviews();
  }

  getAllReviews() {
    const { productId, dispatch } = this.props;
    const listData = fetch(`http://18.217.220.129/reviews/${productId}/list`)
      .then((response) => {
        if (response.status !== 200) { console.log('problem'); }
        return response.json();
      });
    const metaData = fetch(`http://18.217.220.129/reviews/${productId}/meta`)
      .then((response) => {
        if (response.status !== 200) { console.log('problem'); }
        return response.json();
      });
    Promise.all([listData, metaData]).then((info) => { dispatch(updateReviewsToRender(info)); });
  }

  handleTypeChange(event) {
    this.setState({ currentView: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <h3 className="sort">Sort for lists</h3>
        <form onSubmit={this.logger}>
          <select className="selector" value={value} onChange={this.handleTypeChange.bind(this)}>
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
  dispatch: PT.func.isRequired,
};

const connectSort = connect(mapStateToProps, null)(Sort);
export default connectSort;
