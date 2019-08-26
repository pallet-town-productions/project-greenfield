import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/standard-styles.scss';
import '../../styles/related-products.scss';

// const mapStateToProps = (state) => ({
//   ...state,
// });

export const RelatedCard = (props) => {
  const { productId } = props;
  return (
    <div className="card-container">
      Product related to 1:
      <div>
      Related Product:
        {productId}
      </div>
    </div>
  );
};

RelatedCard.propTypes = {
  productId: PT.number.isRequired,
};

const connectedRelatedCard = connect(null, null)(RelatedCard);
export default connectedRelatedCard;
