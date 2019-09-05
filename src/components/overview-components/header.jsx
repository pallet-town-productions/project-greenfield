import React from 'react';
import '../../styles/header.scss';

function Header() {
  return (
    <header>
      <span id="header-logo">LOGO HERE</span>
      <span id="cart-link">
        <i className="material-icons">
          shopping_cart
        </i>
      </span>
      <span id="header-search">SEARCH HERE</span>
    </header>
  );
}

export default Header;
