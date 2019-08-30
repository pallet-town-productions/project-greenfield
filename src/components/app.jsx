/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';
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

    this.helpfulClickHandler = (component, id, type) => {
      if (component === 'reviews') {
        fetch(`http://18.217.220.129/${component}/helpful/${id}`, {
          method: 'PUT',
        });
      } else {
        fetch(`http://18.217.220.129/${component}/${type}/${id}/helpful`, {
          method: 'PUT',
        });
      }
    };

    this.reportClickHandler = (component, id, type) => {
      if (component === 'reviews') {
        fetch(`http://18.217.220.129/${component}/report/${id}`, {
          method: 'PUT',
        });
      } else {
        fetch(`http://18.217.220.129/${component}/${type}/${id}/report`, {
          method: 'PUT',
        });
      }
    };
  }

  render() {
    return (
      <div id="main-container">
        <div id="component-container">
          <Overview />
          {/* <ConnectedRelatedProducts /> */}
          <QnA
            helpfulClickHandler={this.helpfulClickHandler}
            reportClickHandler={this.reportClickHandler}
          />
          <RnR className="RnR-container" />
        </div>
      </div>
    );
  }
}

const connectedApp = connect(mapStateToProps, null)(App);
export default connectedApp;
// will need to update with map state to props and map dispatch to props
