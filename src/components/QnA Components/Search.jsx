import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <input id="questionSearch" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      </div>
    );
  }
}

export default Search;
