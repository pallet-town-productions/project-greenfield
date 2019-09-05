import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ config, handleInputChange }) => {
  const {
    label, id, constraints,
  } = config;
  const { placeholder = '', sublabel = '' } = constraints;
  return (
    <li>
      <label htmlFor={id}>
        {label}
      </label>
      <textarea
        className="qna-modal-a-body"
        id={id}
        name={id}
        minLength={0}
        maxLength={1000}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <span>{sublabel}</span>
    </li>
  );
};

TextInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  config: PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    constraints: PropTypes.shape({
      placeholder: PropTypes.string,
      sublabel: PropTypes.string,
    }),
  }).isRequired,
};

export default TextInput;
