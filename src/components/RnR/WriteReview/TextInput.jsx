import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const {
    label, id, placeHolder = '', handleInputChange,
  } = props;
  return (
    <label htmlFor={id}>
      {label}
      <input
        id={id}
        name={id}
        type="text"
        placeholder={placeHolder}
        onChange={handleInputChange}
      />
    </label>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default TextInput;
