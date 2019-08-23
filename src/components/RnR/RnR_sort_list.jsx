import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './RnR_tile';


const mapStateToProps = (state) => ({
  ...state,
});

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;

    this.getAllReviews = () => {
      console.log(this.state.productId)
      fetch(`http://18.217.220.129/reviews/${this.state.productId}/list`)
        .then((response) => {
          if (response.status !== 200) {
            console.log('problem');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.results)
        })
        .catch((err) => {
          console.log(`error in the fetch, ${err}`);
        })
    };
  }

  render() {
    return (
      <div>
        <h3 className="sort">Sort for lists</h3>
        <button type="button" onClick={() => this.getAllReviews()}>Click me for reviews</button>
        <List />
      </div>
    );
  }
}

const connectSort = connect(mapStateToProps, null)(Sort);
export default connectSort;
