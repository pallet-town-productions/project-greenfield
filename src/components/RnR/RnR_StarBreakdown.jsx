import React from 'react';

const StarBreakdown = () => (
  <ul className="star-breakdown">
    <li>
      <a href="google.com">5 stars</a>
      <progress value="70" max="100" />
    </li>
    <li>
      <a href="google.com">4 stars</a>
      <progress value="90" max="100" />
    </li>
    <li>
      <a href="google.com">3 stars</a>
      <progress value="60" max="100" />
    </li>
    <li>
      <a href="google.com">2 stars</a>
      <progress value="30" max="100" />
    </li>
    <li>
      <a href="google.com">1 stars</a>
      <progress value="40" max="100" />
    </li>
  </ul>
);

export default StarBreakdown;
