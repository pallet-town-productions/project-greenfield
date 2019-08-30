import React from 'react';
import PropTypes from 'prop-types';

const RadioGroupInput = (props) => {
  const {
    options, handleInputChange,
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
    <div className="RadioGroup">{buttons}</div>
  );
};

RadioGroupInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RadioGroupInput;
