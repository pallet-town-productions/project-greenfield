import React from 'react';
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

export const Carousel = (props) => {
  const { relatedReducer } = props;
  return (
    <div className="carousel-container">
      <Slider
        dots={false}
        infinite={false}
        speed={500}
        slidesToShow={3.5}
        slidesToScroll={1}
      >
        {relatedReducer.map(
          (related, index) => (
            <ConnectedRelatedCard
              index={index + 1}
              key={related}
              productId={related}
              outfit={false}
            />
          ),
        )}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  relatedReducer: PT.arrayOf(PT.number).isRequired,
};

const connectedCarousel = connect(mapStateToProps, null)(Carousel);
export default connectedCarousel;
