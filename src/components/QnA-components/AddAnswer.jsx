/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);

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
    return (
      <button type="button" onClick={() => this.showModal(true)}>
        <u>Add Answer</u>
        <Modal show={show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
      </button>
    );
  }
}

export default AddAnswer;
