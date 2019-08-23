/* eslint-disable linebreak-style */
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="search-bar-container">
        <div className="search-input-icons">
          <i className="material-icons">search</i>
          <input className="search-input-field" type="text" placeholder="HAVE A QUESTION? FIND AN ANSWER..." />
        </div>
      </div>
    );
  }
}

export default Search;
