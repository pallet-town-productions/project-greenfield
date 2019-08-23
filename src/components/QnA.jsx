import React from 'react';
import Ask from './QnA Components/Ask';
import List from './QnA Components/List';
import Search from './QnA Components/Search';

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h3>QUESTIONS & ANSWERS</h3>
        <Search />
        <List />
        <button type="submit">MORE ANSWERED QUESTIONS</button>
        <Ask />
      </div>
    );
  }
}

export default QnA;
