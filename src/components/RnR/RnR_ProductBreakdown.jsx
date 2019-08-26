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
    </ul>
  </div>
);

export default ProductBreakdown;
