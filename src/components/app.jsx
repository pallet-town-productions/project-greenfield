/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';
import Overview from './overview-components/overview';
import QnA from './QnA-components/QnA';
import RnR from './RnR/RnR_container';
import ConnectedRelatedProducts from './related-Products-components/related-Products';
import setProductAction from '../actions/setProductAction';
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

  componentDidUpdate(prevProps) {
    const { productId: oldId } = prevProps;
    const { location, dispatch } = this.props;
    const { pathname: pathName } = location;
    const path = parseInt(10, pathName.substr(1));
    if (oldId === path || Number.isNaN(path)) {
      return;
    }
    dispatch(setProductAction(path));
  }

  render() {
    return (
      <div id="main-container">
        <div id="component-container">
          <Overview />
          <ConnectedRelatedProducts />
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

App.propTypes = {
  location: PT.shape({ pathname: PT.string }).isRequired,
  dispatch: PT.func.isRequired,
  productId: PT.number.isRequired,
};

const connectedApp = withRouter(connect(mapStateToProps, null)(App));
export default connectedApp;
