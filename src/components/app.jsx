import React, { Component } from 'react';
import QnA from './QnA';
import RnR from './RnR/RnR_container';
import '../styles/standard-styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          Hello World
          <button type="button">test</button>
        </div>
        <div>
          <QnA />
          <RnR />
        </div>
      </div>
    );
  }
}

export default App;
