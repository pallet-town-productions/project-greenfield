import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RatingBreakdown from './RnR_RatingBreakdown';
import ProductBreakdown from './RnR_ProductBreakdown';
import getMetaData from '../../actions/RnR-Actions/RnR-meta-action';
import '../../styles/RnR-breakdown.scss';

const mapStateToProps = (state) => ({
  ...state,
});

export class BreakdownContainer extends Component {
  componentDidMount() {
    const { productId, dispatch } = this.props;
    fetch(`http://18.217.220.129/reviews/${productId}/meta`)
      .then((response) => response.json())
      .then((data) => dispatch(getMetaData(data)))
      .catch(() => dispatch(getMetaData({}))); // place holder error handling
  }

  render() {
    return (
      <div className="breakdown-container">
        <RatingBreakdown />
        <ProductBreakdown />
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
