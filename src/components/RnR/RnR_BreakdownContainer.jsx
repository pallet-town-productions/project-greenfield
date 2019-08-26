import React from 'react';
import RatingBreakdown from './RnR_RatingBreakdown';
import ProductBreakdown from './RnR_ProductBreakdown';
import '../../styles/RnR-rating-breakdown.scss';

const BreakdownContainer = () => (
  <div className="breakdown-container">
    <RatingBreakdown />
    <ProductBreakdown />
  </div>
);

export default BreakdownContainer;
