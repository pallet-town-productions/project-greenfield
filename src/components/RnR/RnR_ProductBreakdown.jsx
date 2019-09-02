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
          {label}
          <div className="pb-details-container">
            <div className="pb-detail">
              <input className={`pb-range range ${leftValue ? 'range-show' : 'range-hide'}`} type="range" value={leftValue} max={1.5} disabled />
              <p className="pb-bottom-label left">
                <span>{leftSublabel}</span>
              </p>
            </div>
            <div className="pb-detail">
              <input className={`pb-range range ${centerValue ? 'range-show' : 'range-hide'}`} type="range" value={centerValue} max={1.5} disabled />
              <p className="pb-bottom-label center">
                <span>{centerSublabel}</span>
              </p>
            </div>
            <div className="pb-detail">
              <input className={`pb-range range ${rightValue ? 'range-show' : 'range-hide'}`} type="range" value={rightValue} max={5} disabled />
              <p className="pb-bottom-label right">
                <span>{rightSublabel}</span>
              </p>
            </div>
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
