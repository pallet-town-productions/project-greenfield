const changeStyle = function (styleNum) {
  return {
    type: 'CHANGE_STYLE',
    currentStyleIndex: styleNum,
  };
};

export default changeStyle;
