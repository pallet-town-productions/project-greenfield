import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ config, handleInputChange }) => {
  const {
    label, id, value, constraints,
  } = config;
  const { placeholder } = constraints;
  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />

    </div>

  );
};

TextInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  config: PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: '',
    constraints: PropTypes.shape({
      placeholder: PropTypes.string,
    }),
  }).isRequired,
};

export default TextInput;
