const currentStyleReducer = function (currentStyleIndex = 0, action) {
  switch (action.type) {
    case 'CHANGE_STYLE':
      return action.currentStyleIndex;
    default:
      return currentStyleIndex;
  }
};

export default currentStyleReducer;
