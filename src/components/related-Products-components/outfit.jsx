import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import '../../styles/standard-styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/related-products.scss';
import ConnectedRelatedCard from './relatedCard';

const mapStateToProps = (state) => ({
  ...state,
});

export class Outfit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasOutfit: false,
      outfit: null,
    };
  }

  componentDidMount() {
    const { localStorage } = window;
    if (localStorage.length) {
      const outfit = JSON.parse(localStorage.getItem('outfit'));
      this.setState({ outfit });
    }
  }

  addToOutfit() {
    const { productId } = this.props;
  }

  render() {
    const { outfit } = this.state;
    return (
      <div className="carousel-container">
        <Slider
          dots={false}
          infinite={false}
          speed={500}
          slidesToShow={3.5}
          slidesToScroll={1}
        >
          <div className="add-to-outfit">
            Add to your outfit
          </div>
        </Slider>
      </div>
    );
  }
}

Outfit.propTypes = {
  productId: PT.number.isRequired,
};

const connectedOutfit = connect(mapStateToProps, null)(Outfit);
export default connectedOutfit;
