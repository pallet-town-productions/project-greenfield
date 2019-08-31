import React from 'react';
import PropTypes from 'prop-types';

const RadioGroupInput = ({ config, handleInputChange }) => {
  const { label, id, constraints } = config;
  const { options, selected } = constraints;
  const buttons = options.map((option) => (
    <div key={option}>
      <label htmlFor={option}>
        {option}
        <input
          id={option}
          name={id}
          type="radio"
          value={option}
          onChange={handleInputChange}
          checked={option === selected}
        />
      </label>
    </div>
  ));
  return (
    <div className="RadioGroup">
      {label}
      {buttons}
    </div>
  );
};

RadioGroupInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  config: PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    constraints: PropTypes.shape({
      options: PropTypes.array,
      selected: PropTypes.string,
    }),
  }).isRequired,
};

export default RadioGroupInput;
