import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/standard-styles.scss';
import '../../styles/related-products.scss';
import ConnectedRelatedCard from './relatedCard';

const mapStateToProps = (state) => ({
  ...state,
});

export const Carousel = (props) => {
  const { relatedReducer } = props;
  console.log(relatedReducer)
  return (
    <div className="carousel-container">
      {relatedReducer.map((related) => <ConnectedRelatedCard key={related} productId={related} />)}
    </div>
  );
};

Carousel.propTypes = {
  relatedReducer: PT.arrayOf(PT.number).isRequired,
};

const connectedCarousel = connect(mapStateToProps, null)(Carousel);
export default connectedCarousel;
