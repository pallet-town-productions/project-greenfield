/* eslint-disable linebreak-style */
import React from 'react';
import { connect } from 'react-redux';
import Ask from './Ask';
import List from './List';
import Search from './Search';

const mapStateToProps = (state) => ({
  ...state,
});

class QnA extends React.Component {
  constructor(props) {
    super(props);
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
        currentState.questions = result;
        this.setState(currentState);
      });
  }

  render() {
    const { productId } = this.state;
    return (
      <div>
        <h3>
          QUESTIONS & ANSWERS PRODUCTID:
          {productId}
        </h3>
        <Search />
        {/* <List QnA={results} answers={answers} /> */}
        <button type="submit">MORE ANSWERED QUESTIONS</button>
        <Ask />
      </div>
    );
  }
}

const connectedQnA = connect(mapStateToProps, null)(QnA);
export default connectedQnA;
