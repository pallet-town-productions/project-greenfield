import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import '../../styles/standard-styles.scss';
import '../../styles/related-products.scss';
import ConnectedRelatedCard from './relatedCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const mapStateToProps = (state) => ({
  ...state,
});

export const Carousel = (props) => {
  const { relatedReducer } = props;
  return (
    <div className="carousel-container">
      <Slider
        dots
        arrows
        infinite={false}
        speed={500}
        slidesToShow={4}
        slidesToScroll={1}
      >
        {relatedReducer.map(
          (related, index) => (
            <ConnectedRelatedCard index={index + 1} key={related} productId={related} />
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
