import React from 'react';

const ProductBreakdown = () => (
  <div className="product-breakdown breakdown-widget">
    <ul className="breakdown-list">
      Label
      <li className="product-breakdown-item">
        <progress className="product-breakdown-bar bar" />
        <progress className="product-breakdown-bar bar" />
        <progress className="product-breakdown-bar bar" />
      </li>
      <p className="product-breakdown-bottom-label">
        <span>Left Label</span>
        <span>Right Label</span>
      </p>
    </ul>
  </div>
);

export default ProductBreakdown;
