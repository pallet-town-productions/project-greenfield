/* eslint-disable linebreak-style */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ask from './Ask';
import List from './List';
import Search from './Search';

const mapStateToProps = (state) => ({
  ...state,
});

class QnA extends React.Component {
  constructor(props, { helpfulClickHandler }) {
    super(props, { helpfulClickHandler });
    this.state = {
      productId: props.productId,
      questions: [],
    };
  }

  componentDidMount() {
    const { productId } = this.state;
    // grabs initial set of questions
    fetch(`http://18.217.220.129/qa/${productId}/`)
      .then((data) => data.json())
      .then((result) => {
        const currentState = this.state;
        currentState.questions = result.results.slice(0, 2);
        this.setState(currentState);
      });
  }

  render() {
    const { questions } = this.state;
    const { helpfulClickHandler } = this.props;
    return (
      <div>
        <h3>
          QUESTIONS & ANSWERS
        </h3>
        <Search />
        <List questions={questions} helpfulClickHandler={helpfulClickHandler} />
        <button type="submit">MORE ANSWERED QUESTIONS</button>
        <Ask />
      </div>
    );
  }
}

QnA.propTypes = {
  productId: PropTypes.number,
  helpfulClickHandler: PropTypes.func.isRequired,
};

QnA.defaultProps = {
  productId: 1,
};

const connectedQnA = connect(mapStateToProps, null)(QnA);
export default connectedQnA;
