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
      filteredQuestions: [],
      questions: [],
      search: '',
      productName: props.productData.name,
    };

    this.searchFilter = () => {
      const { questions } = this.state;
      this.setState({ search: document.getElementById('qna-searchbar').value }, () => {
        const { search } = this.state;
        if (search.length >= 3) {
          const filteredQuestions = questions.filter(
            (question) => question.question_body.toLowerCase().includes(search.toLowerCase()),
          );
          this.setState({ filteredQuestions });
        } else {
          this.setState({ filteredQuestions: [] });
        }
      });
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
    const {
      questions,
      productId,
      filteredQuestions,
      productName,
    } = this.state;

    const { helpfulClickHandler, reportClickHandler } = this.props;
    return (
      <div id="qna-container">
        <h3>
          QUESTIONS & ANSWERS
        </h3>
        <Search searchFilter={this.searchFilter} />
        <List
          questions={filteredQuestions.length === 0 ? questions.slice(0, 2) : filteredQuestions}
          productName={productName}
          helpfulClickHandler={helpfulClickHandler}
          reportClickHandler={reportClickHandler}
        />
        <button type="submit">MORE ANSWERED QUESTIONS</button>
        <AddQuestion
          productId={productId}
          productName={productName}
        />
      </div>
    );
  }
}

QnA.propTypes = {
  productId: PropTypes.number,
  helpfulClickHandler: PropTypes.func.isRequired,
  reportClickHandler: PropTypes.func.isRequired,
  productData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

QnA.defaultProps = {
  productId: 1,
};

const connectedQnA = connect(mapStateToProps, null)(QnA);
export default connectedQnA;
