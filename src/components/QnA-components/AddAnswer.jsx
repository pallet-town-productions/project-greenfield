/* eslint-disable linebreak-style */
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
        <Modal show={show} handleClose={this.hideModal}>
          <h1>Submit your Answer</h1>
          <h3>{`PRODUCT NAME: ${data.question_body}`}</h3>
          <form>
            <input className="questionsModalAnswer" type="text" placeholder="Your Answer" />
            <br />
            <input className="questionsModalAnswerNick" type="text" placeholder="Your Nickname" />
            <br />
            <input className="questionsModalAnswerEmail" type="text" placeholder="Your Email" />
            <br />
            <input className="questionsModalAnswerPic" name="pic" type="file" accept="image/*" />
          </form>
        </Modal>
      </button>
    );
  }
}

AddAnswer.propTypes = {
  data: PropTypes.shape({
    question_body: PropTypes.string.isRequired,
  }),
};

AddAnswer.defaultProps = {
  data: {
    question_body: 'Please browse for a real product.',
  },
};

export default AddAnswer;
