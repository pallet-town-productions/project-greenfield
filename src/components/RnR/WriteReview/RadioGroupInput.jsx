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
        <input
          id={option}
          name={id}
          type="radio"
          required
          value={option}
          onChange={handleInputChange}
        />
        {option}
      </label>
    </div>
  ));
  return (
    <li className="form-list-item">
      <label htmlFor={id}>
        {label}
      </label>
      <div className="radio-group">
        {buttons}
      </div>
      <div className="form-sublable">{}</div>
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
