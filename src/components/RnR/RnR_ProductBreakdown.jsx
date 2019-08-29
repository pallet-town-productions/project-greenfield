import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  ...state,
});

const setProductRatingValue = (value = 0) => {
  const values = {
    leftValue: 0,
    centerValue: 0,
    rightValue: 0,
  };
  if (value > 0 && value < 1.5) {
    values.leftValue = value;
  }
  if (value >= 1.5 && value < 3) {
    values.centerValue = value;
  }
  if (value >= 3 && value <= 5) {
    values.rightValue = value;
  }
  return values;
};

const setSublables = (label = 'Default') => {
  const defaultSubLabels = {
    Size: {
      left: 'A size too small',
      center: 'Perfect',
      right: 'A size too big',
    },
    Width: {
      left: 'Too narrow',
      center: 'Perfect',
      right: 'Too wide',
    },
    Comfort: {
      left: 'Uncomfortable',
      center: 'Ok',
      right: 'Perfect',
    },
    Quality: {
      left: 'Poor',
      center: 'What I expected',
      right: 'Perfect',
    },
    Length: {
      left: 'Runs short',
      center: 'Perfect',
      right: 'Runs long',
    },
    Fit: {
      left: 'Runs tight',
      center: 'Perfect',
      right: 'Runs loose',
    },
    Default: {
      left: 'Not enough',
      center: 'Perfect',
      right: 'Too much',
    },
  };
  return {
    leftSublabel: defaultSubLabels[label].left || defaultSubLabels.Default.left,
    centerSublabel: defaultSubLabels[label].center || defaultSubLabels.Default.center,
    rightSublabel: defaultSubLabels[label].right || defaultSubLabels.Default.right,
  };
};

const ProductBreakdown = ({ getMetaData }) => {
  const { characteristics } = getMetaData;
  const productLabels = Object.keys(characteristics || [])
    .map((label) => {
      const { leftSublabel, centerSublabel, rightSublabel } = setSublables(label);
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
