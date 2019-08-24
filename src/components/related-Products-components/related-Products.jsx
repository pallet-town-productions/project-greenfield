import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import ConnectedRelatedCard from './relatedCard';
import relatedAction from '../../actions/related-Products-Actions/related-products-action';
import '../../styles/standard-styles.scss';
import '../../styles/related-products.scss';

const mapStateToProps = (state) => ({
  ...state,
});

export class RelatedProducts extends Component {
  componentDidMount() {
    const { productId, dispatch } = this.props;
    fetch(`http://18.217.220.129/products/${productId}/related`)
      .then((data) => data.json())
      .then((relatedProducts) => dispatch(relatedAction(relatedProducts)));
  }

  render() {
    const { productId } = this.props;
    return (
      <div className="related-products-container">
        Products Related To:
        {productId}
        <ConnectedRelatedCard />
      </div>
    );
  }
}

RelatedProducts.propTypes = {
  productId: PT.number.isRequired,
  dispatch: PT.func.isRequired,
};

const connectedRelatedProducts = connect(mapStateToProps, null)(RelatedProducts);
export default connectedRelatedProducts;
