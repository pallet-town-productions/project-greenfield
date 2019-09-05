import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../QnA-components/Modal';
import WriteReviewForm from './WriteReviewForm';
import { recordClickData } from '../../../util/util';

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
    const { productData } = this.props;
    return (
      <button
        type="button"
        id="add-review-button"
        onClick={
          (event) => {
            recordClickData(event.target, 'RatingsAndReviews');
            this.showModal(showModal);
          }
        }
      >
        <span>Add Review</span>
        <Modal show={showModal}>
          <WriteReviewForm productData={productData} hideModal={this.hideModal} />
        </Modal>
      </button>
    );
  }
}

WriteReviewButton.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default WriteReviewButton;
