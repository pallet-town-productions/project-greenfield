/* eslint-disable linebreak-style */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddQuestion from './AddQuestion';
import List from './List';
import Search from './Search';
import '../../styles/QnA-styles.scss';
import { recordClickData } from '../../util/util';

const url = process.env.REACT_APP_APIURL || '123.456.789.1011';

const mapStateToProps = (state) => ({
  ...state,
});

class QnA extends React.Component {
  constructor(props, { helpfulClickHandler, reportClickHandler }) {
    super(props, { helpfulClickHandler, reportClickHandler });
    this.state = {
      productId: props.productData.id,
      filteredQuestions: [],
      questions: [],
      search: '',
      questionDisplayCount: 2,
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

    this.increaseDisplayCount = () => {
      const { questionDisplayCount } = this.state;
      this.setState({ questionDisplayCount: questionDisplayCount + 2 });
    };
  }

  componentDidMount() {
    const { productData } = this.props;
    const { id } = productData;
    // grabs initial set of questions
    fetch(`${url}/qa/${id}?count=1000`)
      .then((data) => data.json())
      .then((result) => {
        const currentState = this.state;
        currentState.questions = result.results;
        this.setState(currentState);
      });
  }

  componentDidUpdate(prevProps) {
    const { productData } = this.props;
    const { productId } = productData.id;

    if (productData.id !== prevProps.productData.id) {
      fetch(`${url}/qa/${productData.id}?count=1000`)
        .then((data) => data.json())
        .then((result) => {
          const currentState = this.state;
          currentState.questions = result.results;
          currentState.productName = productData.name;
          currentState.productId = productId;
          this.setState(currentState);
        });
    }
  }

  render() {
    const {
      questions,
      productId,
      filteredQuestions,
      productName,
      questionDisplayCount,
    } = this.state;

    const { helpfulClickHandler, reportClickHandler } = this.props;
    return (
      <div id="qna-container">
        <h4 style={{ marginTop: '50px' }}>
          QUESTIONS & ANSWERS
        </h4>
        <Search searchFilter={this.searchFilter} />
        <List
          questions={
            filteredQuestions.length === 0
              ? questions.slice(0, questionDisplayCount)
              : filteredQuestions
            }
          productName={productName}
          helpfulClickHandler={helpfulClickHandler}
          reportClickHandler={reportClickHandler}
        />
        { questions.length <= questionDisplayCount
          ? ''
          : (
            <span
              role="presentation"
              id="qna-load-more-questions"
              className="qna-load-more-q"
              onClick={() => {
                recordClickData(document.getElementById('qna-load-more-questions'), 'qna');
                this.increaseDisplayCount();
              }}
            >
              <p style={
                  {
                    lineHeight: '26px',
                    textAlign: 'center',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }
                }
              >
                MORE ANSWERED QUESTIONS
              </p>
            </span>
          ) }
        <AddQuestion
          productId={productId}
          productName={productName}
        />
      </div>
    );
  }
}

QnA.propTypes = {
  helpfulClickHandler: PropTypes.func.isRequired,
  reportClickHandler: PropTypes.func.isRequired,
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const connectedQnA = connect(mapStateToProps, null)(QnA);
export default connectedQnA;
