/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Modal;
