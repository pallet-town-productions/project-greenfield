import React from 'react';
import PT from 'prop-types';
import { recordClickData } from '../../util/util';
import '../../styles/standard-styles.scss';
import '../../styles/RnR-styles.scss';

class PhotoThumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  isModalOpen(e) {
    console.log(e.target);
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
    recordClickData(e.target, 'review_photo');
  }

  render() {
    const { isOpen } = this.state;
    const { photo } = this.props;
    return (
      <div
        id="photo-container"
        className="container"
        onClick={this.isModalOpen.bind(this)}
        onKeyDown={this.isModalOpen.bind(this)}
        role="button"
        tabIndex={0}
      >
        <img
          id="photo-thumbnail"
          className="thumbnail"
          src={photo.url}
          alt=""
        />
        {isOpen ? (
          <div id="photo-modal" className="RnR-modal">
            <span className="close">&times;</span>
            <img id="modal-content" className="modal-content" src={photo.url} alt="" />
          </div>
        ) : <div id="modal-off" />}
      </div>
    );
  }
}

PhotoThumbnails.propTypes = {
  photo: PT.shape({
    url: PT.string.isRequired,
  }).isRequired,
};

export default PhotoThumbnails;
