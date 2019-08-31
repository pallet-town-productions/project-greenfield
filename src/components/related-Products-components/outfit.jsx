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
      outfit: [],
    };
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
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
    const { outfit } = this.state;
    if (outfit.length) {
      if (outfit.includes(productId)) {
        return;
      }
      localStorage.setItem('outfit', JSON.stringify([...outfit, productId]));
      this.setState({ outfit: [productId, ...outfit] });
      return;
    }
    localStorage.setItem('outfit', JSON.stringify([productId]));
    this.setState({ outfit: [productId], hasOutfit: true });
  }

  removeFromOutfit(id) {
    const { localStorage } = window;
    const { outfit } = this.state;
    const updatedOutfit = outfit.filter((item) => item !== id);
    if (updatedOutfit.length) {
      localStorage.setItem('outfit', JSON.stringify(updatedOutfit));
      this.setState({ outfit: updatedOutfit });
      return;
    }
    localStorage.setItem('outfit', JSON.stringify([]));
    this.setState({ outfit: [] });
  }

  render() {
    const { outfit } = this.state;
    const { hasOutfit } = this.state;
    const { productData } = this.props;
    const { name } = productData;
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
              <span>
                <p className="add-text">Add</p>
                <p className="add-text">{name}</p>
                <p className="add-text">To Your Outfit</p>
              </span>
              <img
                src="https://png2.cleanpng.com/sh/3af39c35f80007fc8fdf906c97f7050f/L0KzQYm3U8E2N6VsiZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TgBtfaQyi9twbj3mfLr3TfFzfF51hOd8LYPsd7A0VfFiaZU9UasANHPlR4a1U8U1OGM3SqQ6NUK0QYW9UMA6O2U8S5D5bne=/kisspng-computer-icons-plus-sign-clip-art-plus-sign-5aaad89954cb75.3540222215211460093473.png"
                alt="plus-icon"
              />
            </div>
            {outfit.map(
              (id, index) => (
                <ConnectedRelatedCard
                  index={index + 1}
                  key={id}
                  productId={id}
                  outfit
                  removeFromOutfit={this.removeFromOutfit}
                />
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
  productData: PT.shape({ name: PT.string }).isRequired,
};

const connectedOutfit = connect(mapStateToProps, null)(Outfit);
export default connectedOutfit;
