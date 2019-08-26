/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import PT from 'prop-types';
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
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { productId: props.productId };
    this.helpfulClickHandler = (component, type, id) => {
      fetch(`http://18.217.220.129/${component}/${type}/${id}/helpful`, {
        method: 'PUT',
      });
    };
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
          <QnA helpfulClickHandler={this.helpfulClickHandler} />
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
