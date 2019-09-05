/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName} id="qna-modal-section">
      <section className="modal-main qna-modal-section">
        {children}
      </section>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.shape({}),
};

Modal.defaultProps = {
  children: {},
};

export default Modal;
