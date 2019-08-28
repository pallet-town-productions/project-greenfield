import React from 'react';
import PT from 'prop-types';
import '../../styles/standard-styles.scss';
import '../../styles/RnR-styles.scss';

class PhotoThumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  isModalOpen() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { photo } = this.props;
    return (
      <div
        className="container"
        onClick={this.isModalOpen.bind(this)}
        onKeyDown={this.isModalOpen.bind(this)}
        role="link"
        tabIndex={0}
      >
        <img
          className="thumbnail"
          src={photo.url}
          alt=""
        />
        {isOpen ? (
          <div className="RnR-modal">
            <span className="close">&times;</span>
            <img className="modal-content" src={photo.url} alt="" />
          </div>
        ) : <div />}
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
