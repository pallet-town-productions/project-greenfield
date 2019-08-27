import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/standard-styles.scss';
import '../../styles/related-products.scss';

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
    fetch(`http://18.217.220.129//reviews/${productId}/meta`)
      .then((data) => data.json())
      .then((reviewData) => reviewData.results.map((style) => style.photos))
      .then((photos) => this.setState({ photos, loading: false }));
  }

  render() {
    const { loading } = this.state;
    if (!loading) {
      const { photos } = this.state;
      const { productData } = this.state;
      const { name } = productData;
      return (
        <div className="card-container">
          <img src={photos[0][0].thumbnail_url} alt="defualt-style" />
          <p>{name}</p>
        </div>
      );
    }
    return (
      <p>Loading</p>
    );
  }
}

RelatedCard.propTypes = {
  productId: PT.number.isRequired,
};

const connectedRelatedCard = connect(null, null)(RelatedCard);
export default connectedRelatedCard;
