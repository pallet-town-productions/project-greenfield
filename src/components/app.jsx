import React, { Component } from 'react';
import '../styles/standard-styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    return (
      <div>
Hello World
        <button type="button">test</button>
      </div>
    );
  }
}

export default App;
