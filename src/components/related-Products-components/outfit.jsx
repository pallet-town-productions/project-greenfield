import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { recordClickData } from '../../util/util';
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

  addToOutfit(e) {
    const { localStorage } = window;
    const { productId } = this.props;
    const outfit = this.state.outfit || [];
    recordClickData(e.target, 'relatedProducts');
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

  removeFromOutfit(e, id) {
    recordClickData(e.target, 'relatedProducts');
    const { localStorage } = window;
    const outfit = this.state.outfit || [];
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
    const outfit = this.state.outfit || [];
    const filteredOutfit = outfit.filter((item) => item !== null);
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
            className="carousel"
          >
            <div
              className="add-to-outfit"
              onClick={(e) => this.addToOutfit(e)}
              role="button"
              tabIndex={0}
              onKeyPress={() => this.addToOutfit()}
            >
              <span>
                <p className="add-text">Add</p>
                <p className="add-text">{name}</p>
                <p className="add-text">To Your Outfit</p>
              </span>
              <i className="material-icons" id="add-icon">
                add
              </i>
            </div>
            {filteredOutfit.map(
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
