import React from 'react';
import PropTypes from 'prop-types';

const RadioGroupInput = (props) => {
  const {
    label, id, config, handleInputChange,
  } = props;
  const { options, selected } = config;
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
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  config: PropTypes.shape({
    options: PropTypes.array,
    selected: PropTypes.string,
  }).isRequired,
};

export default RadioGroupInput;
