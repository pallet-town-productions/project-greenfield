import React, { Component } from 'react';
import Modal from '../../QnA-components/Modal';
import WriteReviewForm from './WriteReviewForm';

class WriteReviewButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    return (
      <button
        type="button"
        onClick={() => this.showModal(showModal)}
      >
        Add Review
        <Modal show={showModal}>
          <WriteReviewForm hideModal={this.hideModal} />
        </Modal>
      </button>
    );
  }
}

export default WriteReviewButton;
