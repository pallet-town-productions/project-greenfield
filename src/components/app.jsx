/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';
import {
  FRONTPAGEPRODUCTID, SPLASHPAGEID, recordClickData, generateUserSession,
} from '../util/util';
import Splash from './splash';
import Overview from './overview-components/overview';
import QnA from './QnA-components/QnA';
import RnR from './RnR/RnR_container';
import ConnectedRelatedProducts from './related-Products-components/related-Products';
import { setProductAction, setProductDataActionKickoff, setStyleDataActionKickoff } from '../actions/setProductAction';
import '../styles/standard-styles.scss';

const url = process.env.REACT_APP_APIURL || '123.456.789.1011';

const mapStateToProps = (state) => ({
  ...state,
});
export class App extends Component {
  constructor(props) {
    super(props);

    this.helpfulClickHandler = (component, id, type) => {
      if (component === 'reviews') {
        fetch(`${url}/${component}/helpful/${id}`, {
          method: 'PUT',
        });
      } else {
        fetch(`${url}/${component}/${type}/${id}/helpful`, {
          method: 'PUT',
        });
      }
    };

    this.reportClickHandler = (component, id, type) => {
      if (component === 'reviews') {
        fetch(`${url}/${component}/report/${id}`, {
          method: 'PUT',
        });
      } else {
        fetch(`${url}/${component}/${type}/${id}/report`, {
          method: 'PUT',
        });
      }
    };
  }

  componentDidUpdate(prevProps) {
    const { productId: oldId } = prevProps;
    const { location, dispatch } = this.props;
    const { pathname: pathName } = location;
    const path = parseInt(pathName.substr(1), 10) || FRONTPAGEPRODUCTID;
    if (oldId === path) { // don't update
      if (!window.localStorage.getItem('user_session')) { // if user session doesn't exist yet
        window.localStorage.setItem('user_session', generateUserSession());
      }
      return;
    }
    recordClickData({ id: 'link' }, 'relatedProducts');
    window.scrollTo(0, 0);
    dispatch(setProductAction(path));
    dispatch(setStyleDataActionKickoff(path));
    dispatch(setProductDataActionKickoff(path));
  }

  render() {
    // eslint-disable-next-line camelcase
    const { productData: { id }, styleData: { product_id } } = this.props;
    if (id === SPLASHPAGEID || Number(product_id) === SPLASHPAGEID) {
      return <Splash productId={SPLASHPAGEID + 1} />; // assign it to NOT SPLASHPAGEID
    }
    return (
      <div id="main-container">
        <div id="component-container">
          <Overview />
          <div className="lower-container">
            <ConnectedRelatedProducts />
            <QnA
              helpfulClickHandler={this.helpfulClickHandler}
              reportClickHandler={this.reportClickHandler}
            />
            <RnR className="RnR-container" />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  location: PT.shape({ pathname: PT.string }).isRequired,
  dispatch: PT.func.isRequired,
  productId: PT.number.isRequired,
  productData: PT.shape({ id: PT.number }).isRequired,
  styleData: PT.shape({ product_id: PT.string }).isRequired,
};

const connectedApp = withRouter(connect(mapStateToProps, null)(App));
export default connectedApp;
