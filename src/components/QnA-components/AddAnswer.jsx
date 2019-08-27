/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

class AddAnswer extends React.Component {
  constructor(props, { data }) {
    super(props, { data });

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
    const { data } = this.props;
    return (
      <button type="button" onClick={() => this.showModal(true)}>
        <u>Add Answer</u>
        <Modal show={show}>
          <h1>Submit your Answer</h1>
          <h3>{`PRODUCT NAME: ${data.question_body}`}</h3>
          <form name="QnA-add-answer-form">
            <textarea
              id="QnA-modal-body"
              className="questionsModalAnswer"
              type="text"
              placeholder="Your answer here..."
            />
            <br />
            <input
              id="QnA-modal-nickname"
              className="questionsModalAnswerNick"
              type="text"
              placeholder="Your Nickname"
            />
            <br />
            <input
              id="QnA-modal-email"
              className="questionsModalAnswerEmail"
              type="text"
              placeholder="Email"
            />
            <br />
            <input
              id="QnA-modal-pic"
              className="questionsModalAnswerPic"
              type="text"
              placeholder="URL link to picture"
            />
            <br />
            <input
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                const questionReq = {
                  body: document.getElementById('QnA-modal-body').value,
                  name: document.getElementById('QnA-modal-nickname').value,
                  email: document.getElementById('QnA-modal-email').value,
                  photos: [document.getElementById('QnA-modal-pic').value],
                };

                fetch(`http://18.217.220.129/qa/${data.question_id}/answers`, {
                  method: 'POST',
                  body: JSON.stringify(questionReq),
                  headers: {
                    'Content-Type': 'application/json',
                  },
                })
                  .then((result) => {
                    if (result.ok) {
                      alert('Answer sent!');
                    } else {
                      alert('Answer failed to be sent. Please make sure your email address is correct!');
                    }
                  });

                this.hideModal(false);
              }}
            />
          </form>
        </Modal>
      </button>
    );
  }
}

AddAnswer.propTypes = {
  data: PropTypes.shape({
    question_body: PropTypes.string.isRequired,
    question_id: PropTypes.number.isRequired,
  }),
};

AddAnswer.defaultProps = {
  data: {
    question_body: 'Please browse for a real product.',
  },
};

export default AddAnswer;
