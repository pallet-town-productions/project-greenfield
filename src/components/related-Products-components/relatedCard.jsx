import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/standard-styles.scss';
import '../../styles/related-products.scss';

const mapStateToProps = (state) => ({
  ...state,
});

export const RelatedCard = (props) => {
  const { productId, relatedReducer } = props;
  return (
    <div className="card-container">
      Product related to:
      {productId}
      <div>
      Related Products:
        {relatedReducer}
      </div>
    </div>
  );
};

RelatedCard.propTypes = {
  productId: PT.number.isRequired,
  relatedReducer: PT.arrayOf(PT.number),
};

RelatedCard.defaultProps = {
  relatedReducer: [],
};

const connectedRelatedCard = connect(mapStateToProps, null)(RelatedCard);
export default connectedRelatedCard;
