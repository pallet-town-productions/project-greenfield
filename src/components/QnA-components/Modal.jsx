/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button
          type="submit"
          onClick={(e) => {
            e.stopPropagation();
            handleClose(false);
          }}
        >
Submit

        </button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};

export default Modal;
