import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import QnA from './QnA-components/QnA';
import RnR from './RnR/RnR_container';
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
        <div>
          <QnA />
          <RnR className="RnR-container" />
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
