import React, { Component } from 'react';
import '../styles/standard-styles.scss';
import Header from './header';
import Overview from './overview';

var App = function() {
  return (
    <div id="container">
      <Header />
      <Overview />

    </div>
  );
}

export default App;
