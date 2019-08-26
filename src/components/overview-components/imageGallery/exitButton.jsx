import React from 'react';

const ExitButton = function ({ handleExit }) {
  return (
    <div 
    onClick={handleExit} 
    className="onHover-pointer"
    >
      <i className="material-icons">
        close
      </i>
    </div>
  );
};

export default ExitButton;