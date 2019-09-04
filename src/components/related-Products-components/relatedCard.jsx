import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { recordClickData } from '../../util/util';
import apiUrl from '../../util/api';
import StarRating from '../RnR/RnR_StarRating';
import ConnectedRelatedModal from './related-modal';
import ConnectedModalTable from './related-modal-table';
import '../../styles/standard-styles.scss';
import '../../styles/related-products.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// jest.mock('../../util/api.js');

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
        showModal: false,
      },
      isMounted: false,
    };

    this.handleShowModal = this.handleShowModal.bind(this);
  }

  componentDidMount() {
    this.setState({ isMounted: true }, () => {
      const { productId } = this.props;
      this.getCardData(productId);
    });
  }

  componentDidUpdate(prevProps) {
    const { isMounted } = this.state;
    const { productId } = this.props;
    const { productId: oldId } = prevProps;
    if (!isMounted || oldId === productId) {
      return;
    }
    this.getCardData(productId);
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  getCardData(productId) {
    const url = apiUrl;
    this.setState({ loading: true });
    fetch(`${url}/products/${productId}`)
      .then((data) => data.json())
      .then((productData) => this.setState({ productData }));
    fetch(`${url}/products/${productId}/styles`)
      .then((data) => data.json())
      .then((productData) => productData.results.map((style) => style.photos))
      .then((photos) => this.setState({ photos, loading: false }));
    fetch(`${url}/reviews/${productId}/meta`)
      .then((data) => data.json())
      .then((reviewData) => Object.values(reviewData.ratings))
      .then((ratings) => ratings.reduce((element, acc) => acc + element, 0) / ratings.length)
      .then((reviewAvg) => this.setState({ reviewAvg: Math.round(reviewAvg * 10) / 10 }));
  }

  handleShowModal(e) {
    recordClickData(e.target, 'relatedProducts');
    this.setState({ showModal: true });
  }

  handleHideModal() {
    this.setState({ showModal: false });
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
      const { removeFromOutfit } = this.props;
      const { productId } = this.props;
      const { showModal } = this.state;
      const modal = showModal ? (
        <ConnectedRelatedModal>
          <div
            className="related-modal-container"
            onClick={() => this.handleHideModal()}
            role="button"
            tabIndex={0}
            onKeyPress={() => this.handleHideModal()}
          >
            <div className="related-modal">
              <ConnectedModalTable compareData={productData} />
            </div>
          </div>
        </ConnectedRelatedModal>
      ) : null;
      return (
        <div className="card-container">
          {modal}
          <div className="image-container">
            <img src={photos[0][0].thumbnail_url} alt="default-style" />
            {outfit
            && (
            <i
              role="button"
              className="material-icons"
              id="remove-button"
              onClick={(() => removeFromOutfit(productId))}
              tabIndex={0}
              onKeyPress={() => removeFromOutfit(productId)}
            >
              cancel
            </i>
            )}
            {!outfit
            && (
            <i
              className="material-icons"
              id="compare-button"
              tabIndex={0}
              role="button"
              onClick={(e) => this.handleShowModal(e)}
              onKeyPress={() => this.handleShowModal(productId)}
            >
              stars
            </i>
            )}
          </div>
          <div className="card-info-container">
            <p className="card-sub-text">{category}</p>
            <Link to={`/${productId}`}>
              <p className="card-info">{name}</p>
            </Link>
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
  removeFromOutfit: PT.func,
};

RelatedCard.defaultProps = {
  removeFromOutfit: () => {},
};

const connectedRelatedCard = connect(null, null)(RelatedCard);
export default connectedRelatedCard;
