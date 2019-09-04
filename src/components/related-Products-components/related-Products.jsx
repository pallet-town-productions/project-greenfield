import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import ConnectedCarousel from './carousel';
import ConnectedOutfit from './outfit';
import relatedAction from '../../actions/related-Products-Actions/related-products-action';
import '../../styles/standard-styles.scss';
import '../../styles/related-products.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const url = process.env.REACT_APP_APIURL || '123.456.789.1011';


const mapStateToProps = (state) => ({
  ...state,
});

export class RelatedProducts extends Component {
  componentDidMount() {
    const { productId, dispatch } = this.props;
    fetch(`${url}/products/${productId}/related`)
      .then((data) => data.json())
      .then((relatedProducts) => (
        dispatch(relatedAction(relatedProducts.filter((id) => id !== 11)))
      ));
  }

  componentDidUpdate(prevProps) {
    const { productId, dispatch } = this.props;
    const { productId: oldId } = prevProps;
    if (oldId === productId) {
      return;
    }
    fetch(`${url}/products/${productId}/related`)
      .then((data) => data.json())
      .then((relatedProducts) => (
        dispatch(relatedAction(relatedProducts.filter((id) => id !== 11)))
      ));
  }

  render() {
    return (
      <div className="related-products-container">
        <p className="carousel-title">RELATED PRODUCTS:</p>
        <ConnectedCarousel />
        <p className="carousel-title">YOUR OUTFIT:</p>
        <ConnectedOutfit />
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
