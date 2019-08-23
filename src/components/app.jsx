import React from 'react';
import '../styles/standard-styles.scss';
import Header from './overview/header';
import Overview from './overview/overview';

const App = function () {
  return (
    <div id="container">
      <Header />
      <Overview />

    </div>
  );
};

export default App;
