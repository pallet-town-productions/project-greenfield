import React, { Component } from 'react';
import QnA from './QnA';
import '../styles/standard-styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
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
        </div>
      </div>
    );
  }
}

export default App;
