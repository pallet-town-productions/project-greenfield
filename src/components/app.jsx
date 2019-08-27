/* eslint-disable linebreak-style */
import React from 'react';
import { connect } from 'react-redux';
import Header from './overview-components/header';
import Overview from './overview-components/overview';
import QnA from './QnA-components/QnA';
import RnR from './RnR/RnR_container';
import ConnectedRelatedProducts from './related-Products-components/related-Products';
import '../styles/standard-styles.scss';

const mapStateToProps = (state) => ({
  ...state,
});
export const App = () => (
  <div id="main-container">
    <div id="component-container">
      <Header />
      <Overview />
      {/* <QnA />
        <RnR className="RnR-container" />
        <ConnectedRelatedProducts /> */}
    </div>
  </div>
);

const connectedApp = connect(mapStateToProps, null)(App);
export default connectedApp;
// will need to update with map state to props and map dispatch to props
