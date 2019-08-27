/* eslint-disable linebreak-style */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddQuestion from './AddQuestion';
import List from './List';
import Search from './Search';
import '../../styles/QnA-styles.scss';

const mapStateToProps = (state) => ({
  ...state,
});

class QnA extends React.Component {
  constructor(props, { helpfulClickHandler, reportClickHandler }) {
    super(props, { helpfulClickHandler, reportClickHandler });
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
        currentState.questions = result.results;
        this.setState(currentState);
      });
  }

  render() {
    const { questions, productId } = this.state;
    const { helpfulClickHandler, reportClickHandler } = this.props;
    return (
      <div id="qna-container">
        <h3>
          QUESTIONS & ANSWERS
        </h3>
        <Search questions={questions} />
        <List
          questions={questions.slice(0, 2)}
          helpfulClickHandler={helpfulClickHandler}
          reportClickHandler={reportClickHandler}
        />
        <button type="submit">MORE ANSWERED QUESTIONS</button>
        <AddQuestion productId={productId} />
      </div>
    );
  }
}

QnA.propTypes = {
  productId: PropTypes.number,
  helpfulClickHandler: PropTypes.func.isRequired,
  reportClickHandler: PropTypes.func.isRequired,
};

QnA.defaultProps = {
  productId: 1,
};

const connectedQnA = connect(mapStateToProps, null)(QnA);
export default connectedQnA;
