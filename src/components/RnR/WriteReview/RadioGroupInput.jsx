import React from 'react';
import PropTypes from 'prop-types';

const RadioGroupInput = (props) => {
  const {
    label, options, handleInputChange,
  } = props;
  const buttons = options.map((option) => (
    <div key={option}>
      <label htmlFor="option">
        {option}
        <input
          id={option}
          name={option}
          type="radio"
          onChange={handleInputChange}
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
  label: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RadioGroupInput;
