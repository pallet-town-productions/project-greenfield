import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = ({ config, handleInputChange }) => {
  const {
    label, id, constraints, type,
  } = config;
  const { placeholder = '', sublabel = '' } = constraints;
  return (
    <li className="form-list-item">
      <div>
        <label htmlFor={id}>
          {label}
        </label>
      </div>
      <input
        className="form-single-input"
        id={id}
        name={id}
        type={type}
        required
        maxLength="60"
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <div className="form-sublable">{sublabel}</div>
    </li>
  );
};

SingleInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  config: PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    constraints: PropTypes.shape({
      placeholder: PropTypes.string,
      sublabel: PropTypes.string,
    }),
  }).isRequired,
};

export default SingleInput;
