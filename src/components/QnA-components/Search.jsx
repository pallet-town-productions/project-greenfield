/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { recordClickData } from '../../util/util';

const Search = ({ searchFilter }) => (
  <div id="search-bar-container">
    <div className="search-input-icons">
      <i className="material-icons">search</i>
      <input
        id="qna-searchbar"
        className="search-input-field"
        type="text"
        placeholder="HAVE A QUESTION? FIND AN ANSWER..."
        onClick={() => recordClickData(document.getElementById('qna-searchbar'), 'qna')}
        onChange={searchFilter}
      />
    </div>
  </div>
);

Search.propTypes = {
  searchFilter: PropTypes.func.isRequired,
};

export default Search;
