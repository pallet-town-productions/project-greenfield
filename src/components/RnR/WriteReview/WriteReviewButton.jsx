import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConnectedRelatedModal from '../../related-Products-components/related-modal';
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
    const modal = showModal ? (
      <ConnectedRelatedModal>
        <div
          role="presentation"
          className="related-modal-container"
          id="rnr-modal-container"
          onClick={(e) => {
            if (e.target.id === 'rnr-modal-container') {
              this.hideModal();
            }
          }}
        >
          <WriteReviewForm productData={productData} hideModal={this.hideModal} />
        </div>
      </ConnectedRelatedModal>
    ) : null;
    return (
      <div>
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
          <span id="add-review-span">Add Review</span>
        </button>
        <div>
          {modal}
        </div>
      </div>
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
