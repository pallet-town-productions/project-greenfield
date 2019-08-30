import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import '../../styles/related-products.scss';
import '../../styles/standard-styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
      this.setState({ outfit, hasOutfit: true });
    }
  }

  addToOutfit() {
    const { localStorage } = window;
    const { productId } = this.props;
    const outfit = this.state;
    if (outfit.length) {
      if (outfit.includes(productId)) {
        return;
      }
      localStorage.setItem('outfit', JSON.stringify([...outfit, productId]));
      this.setState({ outfit: [...outfit, productId] });
      return;
    }
    localStorage.setItem('outfit', JSON.stringify([productId]));
    this.setState({ outfit: [productId], hasOutfit: true });
  }

  render() {
    const { outfit } = this.state;
    const { hasOutfit } = this.state;
    if (hasOutfit) {
      return (
        <div className="carousel-container">
          <Slider
            dots={false}
            infinite={false}
            speed={500}
            slidesToShow={3.5}
            slidesToScroll={1}
          >
            <div
              className="add-to-outfit"
              onClick={() => this.addToOutfit()}
              role="button"
              tabIndex={0}
              onKeyPress={() => this.addToOutfit()}
            >
              Add to your outfit
            </div>
            {outfit.map(
              (id, index) => (
                <ConnectedRelatedCard index={index + 1} key={id} productId={id} />
              ),
            )}
          </Slider>
        </div>
      );
    }
    return (
      <div className="carousel-container">
        <Slider
          dots={false}
          infinite={false}
          speed={500}
          slidesToShow={3.5}
          slidesToScroll={1}
        >
          <div
            className="add-to-outfit"
            onClick={() => this.addToOutfit()}
            role="button"
            tabIndex={0}
            onKeyPress={() => this.addToOutfit()}
          >
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
