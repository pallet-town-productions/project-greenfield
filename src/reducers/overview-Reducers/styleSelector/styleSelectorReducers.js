const currentStyleIndex = function (currentStyleIdx = 0, action) {
  switch (action.type) {
    case 'CHANGE_STYLE':
      return action.currentStyleIndex;
    default:
      return currentStyleIdx;
  }
};

const style = function (styleList = [], action) {
  switch (action.type) {
    case 'CHANGE_STYLE_LIST':
      return action.styleList || [];
    default:
      return styleList;
  }
};

export {
  style,
  currentStyleIndex,
};
