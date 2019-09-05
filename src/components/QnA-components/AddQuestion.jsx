/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import api from '../../config/config';

class AddQuestion extends React.Component {
  constructor(props, { productName, productId }) {
    super(props, { productName, productId });

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
    const { productName, productId } = this.props;
    return (
      <span
        role="presentation"
        className="qna-add-q-btn"
        onClick={() => this.showModal(true)}
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
          ADD A QUESTION
        </p>
        <Modal show={show}>
          <form
            autoComplete="off"
            className="form-style-7"
            onSubmit={(e) => {
              const modalData = {
                body: document.getElementById('qna-modal-q-body').value,
                name: document.getElementById('qna-modal-q-name').value,
                email: document.getElementById('qna-modal-q-email').value,
              };

              e.preventDefault();

<<<<<<< HEAD
              fetch(`http://${api}/qa/${productId}`, {
=======
              fetch(`http://18.217.220.129/qa/${productId}`, {
>>>>>>> 4fde01445e82cd522528709dae971f328158b053
                method: 'POST',
                body: JSON.stringify(modalData),
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                .then((result) => {
                  if (result.ok) {
                    alert('Thanks for sending in your question!');
                    this.hideModal(false);
                  } else {
                    alert('ErRor! erRoR! Please contact the digital overlords of this site.');
                  }
                });
            }}
          >
            <h1>{productName}</h1>
            <ul>
              <li>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  maxLength="60"
                  id="qna-modal-q-name"
                />
                <span>Enter your nickname here</span>
              </li>
              <li>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  maxLength="60"
                  id="qna-modal-q-email"
                />
                <span>Enter a valid email address</span>
              </li>
              <li>
                <label htmlFor="bio">Your Question</label>
                <textarea
                  name="bio"
                  maxLength="1000"
                  id="qna-modal-q-body"
                />
                <span>{`What question do you have about ${productName}?`}</span>
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

AddQuestion.propTypes = {
  productName: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
};

export default AddQuestion;
