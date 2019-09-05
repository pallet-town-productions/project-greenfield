/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import { recordClickData } from '../../util/util';

class AddAnswer extends React.Component {
  constructor(props, { data, productName, counter }) {
    super(props, { data, productName, counter });

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
    const { data, productName, counter } = this.props;
    return (
      <span
        id={`qna-add-q${data.question_id}`}
        className="qna-report-btn"
        role="presentation"
        type="button"
        onClick={() => {
          this.showModal(true);
        }}
      >
        <u style={{ fontSize: '12px', color: 'gray' }}>Add Answer</u>
        <Modal show={show}>
          <form
            autoComplete="off"
            className="form-style-7"
            onSubmit={(e) => {
              const modalData = {
                body: document.getElementsByClassName('qna-modal-a-body')[counter - 1].value,
                name: document.getElementsByClassName('qna-modal-a-name')[counter - 1].value,
                email: document.getElementsByClassName('qna-modal-a-email')[counter - 1].value,
                photos: document.getElementsByClassName('qna-modal-a-pic')[counter - 1].value.split(' '),
              };
              e.preventDefault();

              fetch(`http://${process.env.REACT_APP_APIURL}/qa/${data.question_id}/answers`, {
                method: 'POST',
                body: JSON.stringify(modalData),
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                .then((result) => {
                  if (result.ok) {
                    alert('Thanks for answering!');
                    recordClickData(document.getElementById(`qna-add-q${data.question_id}`), 'qna');
                    this.hideModal(false);
                  } else {
                    alert('Something went horribly wrong, we\'re so sorry!');
                  }
                });
            }}
          >
            <h1>Submit your Answer</h1>
            <h2>
              {`${productName}: ${data.question_body}`}
            </h2>
            <ul>
              <li>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  maxLength="60"
                  className="qna-modal-a-name"
                />
                <span>Enter your nickname here</span>
              </li>
              <li>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  maxLength="60"
                  className="qna-modal-a-email"
                />
                <span>Enter a valid email address</span>
              </li>
              <li>
                <label htmlFor="url">Picture</label>
                <input
                  type="url"
                  name="url"
                  maxLength="240"
                  className="qna-modal-a-pic"
                />
                <span>Valid link to your picture/s (eg: http://www.google.com)</span>
              </li>
              <li>
                <label htmlFor="bio">Your Answer</label>
                <textarea
                  name="bio"
                  maxLength="1000"
                  className="qna-modal-a-body"
                />
                <span>{`Your answer to: ${data.question_body}`}</span>
              </li>
              <li>
                <input type="submit" value="Send This" />
              </li>
            </ul>
          </form>
        </Modal>
      </span>
    );
  }
}

AddAnswer.propTypes = {
  data: PropTypes.shape({
    question_body: PropTypes.string.isRequired,
    question_id: PropTypes.number.isRequired,
  }),
  productName: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
};

AddAnswer.defaultProps = {
  data: {
    question_body: 'Please browse for a real product.',
  },
};

export default AddAnswer;
