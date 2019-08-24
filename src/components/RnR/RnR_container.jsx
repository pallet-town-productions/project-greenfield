import React from 'react';
import { connect } from 'react-redux';
import RatingBreakdown from './RnR_RatingBreakdown';
import Sort from './RnR_sort_list';

const mapStateToProps = (state) => ({
  ...state,
});

class RnRContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Ratings and Reviews</h2>
        <RatingBreakdown />
        <Sort />
      </div>
    );
  }
}

const connectedRnRContainer = connect(mapStateToProps, null)(RnRContainer);
export default connectedRnRContainer;
