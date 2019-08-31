import React from 'react';
import PropTypes from 'prop-types';

const FileInput = ({ config, handleInputChange }) => {
  const { label, id } = config;
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input
          id={id}
          name={id}
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          multiple
        />
      </label>
    </div>
  );
};

FileInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  config: PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    constraints: PropTypes.shape({
    }),
  }).isRequired,
};

export default FileInput;
