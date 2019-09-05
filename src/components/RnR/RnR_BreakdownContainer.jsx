import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConnectedRatingBreakdown from './RnR_RatingBreakdown';
import ConnectedProductBreakdown from './RnR_ProductBreakdown';
import { getMetaData } from '../../actions/RnR-Actions/RnR-meta-action';
import '../../styles/RnR-breakdown.scss';

const apiUrl = process.env.REACT_APP_APIURL || '123.456.789.1011';

const mapStateToProps = (state) => ({
  ...state,
});

export class BreakdownContainer extends Component {
  componentDidMount() {
    const { productId, dispatch } = this.props;
    fetch(`${apiUrl}/reviews/${productId}/meta`)
      .then((response) => response.json())
      .then((data) => dispatch(getMetaData(data)))
      .catch(() => dispatch(getMetaData({}))); // place holder error handling
  }

  render() {
    return (
      <div className="breakdown-container">
        <ConnectedRatingBreakdown />
        <ConnectedProductBreakdown />
      </div>
    );
  }
}

BreakdownContainer.propTypes = {
  productId: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const ConnectedBreakdownContainer = connect(mapStateToProps, null)(BreakdownContainer);
export default ConnectedBreakdownContainer;
