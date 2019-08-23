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
      const { productId } = this.state;
      const listData = fetch(`http://18.217.220.129/reviews/${productId}/list`)
        .then((response) => {
          if (response.status !== 200) { console.log('problem'); }
          return response.json();
        });
      const metaData = fetch(`http://18.217.220.129/reviews/${productId}/meta`)
        .then((response) => {
          if (response.status !== 200) { console.log('problem'); }
          return response.json();
        });
      Promise.all([listData, metaData]).then((info) => { console.log(info); });
    };
  }

  componentDidMount() {
    this.getAllReviews();
  }

  render() {
    return (
      <div>
        <h3 className="sort">Sort for lists</h3>
        <List />
      </div>
    );
  }
}

const connectSort = connect(mapStateToProps, null)(Sort);
export default connectSort;
