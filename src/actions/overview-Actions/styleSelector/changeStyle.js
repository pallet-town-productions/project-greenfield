const changeStyle = function (styleIndex = 0) {
  return {
    type: 'CHANGE_STYLE',
    currentStyleIndex: styleIndex,
  };
};

export default changeStyle;
