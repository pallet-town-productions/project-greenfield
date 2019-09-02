const currentStyleIndex = function (currentStyleIdx = 0, action) {
  switch (action.type) {
    case 'CHANGE_STYLE':
      return action.currentStyleIndex;
    default:
      return currentStyleIdx;
  }
};

export default currentStyleIndex;
