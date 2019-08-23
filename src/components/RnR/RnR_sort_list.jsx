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
      const reviewPack = [];
      const { productId } = this.state;
      fetch(`http://18.217.220.129/reviews/${productId}/list`)
        .then((response) => {
          if (response.status !== 200) { console.log('problem'); }
          return response.json();
        })
        .then((data) => { reviewPack.push(data); })
        .catch((err) => { console.log(`error in the fetch, ${err}`); });

      fetch(`http://18.217.220.129/reviews/${productId}/meta`)
        .then((response) => {
          if (response.status !== 200) {  }
          return response.json();
        })
        .then((data) => { reviewPack.push(data); })
        .catch((err) => { console.log(`error in the fetch, ${err}`); });
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
