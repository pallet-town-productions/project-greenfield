import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import StarRating from '../RnR/RnR_StarRating';
import '../../styles/standard-styles.scss';
import '../../styles/related-products.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const mapStateToProps = (state) => ({
//   ...state,
// });
export class RelatedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      productData: {
        name: null,
        default_price: null,
        category: null,
      },
    };
  }

  componentDidMount() {
    const { productId } = this.props;
    fetch(`http://18.217.220.129/products/${productId}`)
      .then((data) => data.json())
      .then((productData) => this.setState({ productData }));
    fetch(`http://18.217.220.129/products/${productId}/styles`)
      .then((data) => data.json())
      .then((productData) => productData.results.map((style) => style.photos))
      .then((photos) => this.setState({ photos, loading: false }));
    fetch(`http://18.217.220.129/reviews/${productId}/meta`)
      .then((data) => data.json())
      .then((reviewData) => Object.values(reviewData.ratings))
      .then((ratings) => ratings.reduce((element, acc) => acc + element, 0) / ratings.length)
      .then((reviewAvg) => this.setState({ reviewAvg: Math.round(reviewAvg * 10) / 10 }));
  }

  render() {
    const { loading } = this.state;
    if (!loading) {
      const { photos } = this.state;
      const { productData } = this.state;
      const { default_price: defaultPrice } = productData;
      const { category } = productData;
      const { name } = productData;
      const { reviewAvg } = this.state;
      const { outfit } = this.props;
      return (
        <div className="card-container">
          <div className="image-container">
            <img src={photos[0][0].thumbnail_url} alt="default-style" />
            {outfit && <i className="material-icons" id="compare-button">highlight_off</i>}
            {!outfit && <i className="material-icons" id="compare-button">star_border</i>}
          </div>
          <div className="card-info-container">
            <p className="card-sub-text">{category}</p>
            <p className="card-info">{name}</p>
            <p className="card-sub-text">
              $
              {defaultPrice}
            </p>
            <StarRating starCount={reviewAvg || 0} />
          </div>
        </div>
      );
    }
    return (
      <div className="card-container">
        <p>Loading</p>
      </div>
    );
  }
}

RelatedCard.propTypes = {
  productId: PT.number.isRequired,
  outfit: PT.bool.isRequired,
};

const connectedRelatedCard = connect(null, null)(RelatedCard);
export default connectedRelatedCard;
