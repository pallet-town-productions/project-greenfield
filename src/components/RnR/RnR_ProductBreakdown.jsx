import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  ...state,
});

const ProductBreakdown = ({ getMetaData }) => {
  const { characteristics } = getMetaData;
  const sublabels = {
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
  const productLabels = Object.keys(characteristics || [])
    .map((label) => (
      <li key={label} className="product-breakdown-item">
        <div>
          {label}
          <div>
            <progress className="product-breakdown-bar bar" />
            <progress className="product-breakdown-bar bar" />
            <progress className="product-breakdown-bar bar" />
          </div>
          <p className="product-breakdown-bottom-label">
            <span>{sublabels[label].left || sublabels.Default.left}</span>
            <span>{sublabels[label].center || sublabels.Default.center}</span>
            <span>{sublabels[label].right || sublabels.Default.right}</span>
          </p>
        </div>
      </li>
    ));

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
