/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

class PictureModal extends React.Component {
  constructor(props, { photo, answer }) {
    super(props, { photo, answer });
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
    const { photo, answer } = this.props;
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
      <div>
        <span
          role="button"
          onClick={this.showModal}
          tabIndex={0}
          onKeyPress={this.showModal}
        >
          <img
            key={`ia${answer.id}`}
            alt={`Uploaded by: ${answer.answerer_name}`}
            src={photo}
            className="thumbnail"
          />
        </span>
        <span className={showHideClassName}>
          <section className="modal-main">
            <img
              key={`ia${answer.id}`}
              alt={`Uploaded by: ${answer.answerer_name}`}
              src={photo}
              className="modal-picture"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                this.hideModal(false);
              }}
            >
              Close
            </button>
          </section>
        </span>
      </div>
    );
  }
}

PictureModal.propTypes = {
  photo: PropTypes.string.isRequired,
  answer: PropTypes.shape({
    answerer_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PictureModal;
