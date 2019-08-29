/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

class AddQuestion extends React.Component {
  constructor(props, { productId, productName }) {
    super(props, { productId, productName });

    this.state = {
      show: false,
    };

    this.showModal = (boolean) => {
      this.setState({ show: boolean });
    };

    this.hideModal = (boolean) => {
      this.setState({ show: boolean });
    };
  }

  render() {
    const { show } = this.state;
    const { productId, productName } = this.props;
    return (
      <span
        role="presentation"
        className="qna-add-q-btn"
        onClick={() => this.showModal(true)}
      >
        <p style={{ lineHeight: '20px', textAlign: 'center', fontSize: '18px' }}>
          ADD A QUESTION
        </p>
        <Modal show={show}>
          <h1>Ask Your Question</h1>
          <h3>{`About the ${productName}`}</h3>
          <form name="QnA-add-answer-form">
            <textarea
              id="QnA-modal-q-body"
              className="questionsModalAnswer"
              type="text"
              placeholder="Your question here..."
            />
            <br />
            <input
              id="QnA-modal-q-nickname"
              className="questionsModalAnswerNick"
              type="text"
              placeholder="Your Nickname"
            />
            <br />
            <input
              id="QnA-modal-q-email"
              className="questionsModalAnswerEmail"
              type="text"
              placeholder="Email"
            />
            <br />
            <input
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                const questionReq = {
                  body: document.getElementById('QnA-modal-q-body').value,
                  name: document.getElementById('QnA-modal-q-nickname').value,
                  email: document.getElementById('QnA-modal-q-email').value,
                };

                fetch(`http://18.217.220.129/qa/${productId}`, {
                  method: 'POST',
                  body: JSON.stringify(questionReq),
                  headers: {
                    'Content-Type': 'application/json',
                  },
                })
                  .then((result) => {
                    if (result.ok) {
                      alert('Question sent!');
                    } else {
                      alert('Question failed to be sent. Please make sure your email is correct!');
                    }
                  });

                this.hideModal(false);
              }}
            />
          </form>
        </Modal>
      </span>
    );
  }
}

AddQuestion.propTypes = {
  productId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
};

export default AddQuestion;
