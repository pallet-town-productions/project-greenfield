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
<<<<<<< HEAD
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
          {/* <QnA />
          <RnR className="RnR-container" />
          <ConnectedRelatedProducts /> */}
        </div>
=======
export const App = () => {
  return (
    <div id="main-container">
      <div id="component-container">
        <Header />
        <Overview />
        <QnA />
        <RnR className="RnR-container" />
        <ConnectedRelatedProducts />
>>>>>>> 328957fbb500467a4ba2591377a554580255738b
      </div>
    </div>
  );
};

const connectedApp = connect(mapStateToProps, null)(App);
export default connectedApp;
// will need to update with map state to props and map dispatch to props
