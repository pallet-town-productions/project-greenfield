import React from 'react';
import ConnectedBreakdownContainer from './RnR_BreakdownContainer';
import Sort from './RnR_sort_list';
import '../../styles/RnR-styles.scss';

class RnR extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h4 id="scrollRnR">RATINGS AND REVIWS</h4>
        <div className="RnR_container">
          <ConnectedBreakdownContainer />
          <Sort />
        </div>
      </div>
    );
  }
}

export default RnR;
