import React from 'react';
import PropTypes from 'prop-types';

const RadioGroupInput = ({ config, handleInputChange }) => {
  const { label, id, constraints } = config;
  const { options } = constraints;
  const buttons = options.map((option) => (
    <div
      key={option}
      className="radio-button"
    >
      <label htmlFor={option}>
        {option}
        <input
          id={option}
          name={id}
          type="radio"
          required
          value={option}
          onChange={handleInputChange}
        />
      </label>
    </div>
  ));
  return (
    <li className="radio-group">
      {label}
      {buttons}
    </li>
  );
};

RadioGroupInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  config: PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    constraints: PropTypes.shape({
      options: PropTypes.array,
    }),
  }).isRequired,
};

export default RadioGroupInput;
