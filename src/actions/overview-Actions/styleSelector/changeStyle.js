const changeStyle = function (styleNum = 0) {
  return {
    type: 'CHANGE_STYLE',
    currentStyleIndex: styleNum,
  };
};

export default changeStyle;
