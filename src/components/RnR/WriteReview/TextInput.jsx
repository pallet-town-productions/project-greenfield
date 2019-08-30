import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const { label, placeHolder, handleInputChange } = props;
  return (
    <label htmlFor={label}>
      {label}
      <input
        id={label}
        name={label}
        type="text"
        placeholder={placeHolder}
        onChange={handleInputChange}
      />
    </label>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default TextInput;
