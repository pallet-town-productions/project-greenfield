import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/standard-styles.scss';

const mapStateToProps = (state) => ({
  ...state,
});

export class RelatedProducts extends Component {
  componentDidMount() {
    const { productId } = this.props;
    fetch(`http://18.217.220.129/products/${productId}/related`);
  }

  render() {
    const { productId } = this.props;
    return (
      <div className="related-products-container">
        {productId}
      </div>
    );
  }
}

RelatedProducts.propTypes = {
  productId: PT.number.isRequired,
};

const connectedRelatedProducts = connect(mapStateToProps, null)(RelatedProducts);
export default connectedRelatedProducts;
