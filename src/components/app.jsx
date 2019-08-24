/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Header from './overview/header';
import Overview from './overview/overview';
import QnA from './QnA-components/QnA';
import RnR from './RnR/RnR_container';
import ConnectedRelatedProducts from './related-Products-components/related-Products';
import '../styles/standard-styles.scss';

const mapStateToProps = (state) => ({
  ...state,
});
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { productId: props.productId };
  }

  render() {
    const { productId } = this.state;
    return (
      <div>
        <div>
          Hello World, Product:
          { productId }
          <button type="button">test</button>
        </div>
        <div id="container">
          <Header />
          <Overview />
          <QnA />
          <RnR className="RnR-container" />
          <ConnectedRelatedProducts />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  productId: PT.number.isRequired,
};

const connectedApp = connect(mapStateToProps, null)(App);
export default connectedApp;
// will need to update with map state to props and map dispatch to props
