import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setProductRatingValue, setProductSublables } from '../../util/RnR-review-meta';

// TODO: refactor to not map entire state to props
const mapStateToProps = (state) => ({
  ...state,
});

export const ProductBreakdown = ({ getMetaData }) => {
  const { characteristics } = getMetaData;
  const productLabels = Object.keys(characteristics || [])
    .map((label) => {
      const { leftSublabel, centerSublabel, rightSublabel } = setProductSublables(label);
      const {
        leftValue,
        centerValue,
        rightValue,
      } = setProductRatingValue(characteristics[label].value);

      return (
        <li key={label} className="product-breakdown-item">
          <div>
            {label}
            <div>
              <progress className="product-breakdown-bar bar" value={leftValue} max={1.5} />
              <progress className="product-breakdown-bar bar" value={centerValue} max={3} />
              <progress className="product-breakdown-bar bar" value={rightValue} max={5} />
            </div>
            <p className="product-breakdown-bottom-label">
              <span>{leftSublabel}</span>
              <span>{centerSublabel}</span>
              <span>{rightSublabel}</span>
            </p>
          </div>
        </li>
      );
    });

  return (
    <div className="product-breakdown breakdown-widget">
      <ul className="breakdown-list">{productLabels}</ul>
    </div>
  );
};

ProductBreakdown.propTypes = {
  getMetaData: PropTypes.shape({
    product_id: PropTypes.string,
    ratings: PropTypes.object,
    recommended: PropTypes.object,
    characteristics: PropTypes.object,
  }),
};

ProductBreakdown.defaultProps = {
  getMetaData: {
    characteristics: {},
  },
};

const ConnectedProductBreakdown = connect(mapStateToProps, null)(ProductBreakdown);
export default ConnectedProductBreakdown;
