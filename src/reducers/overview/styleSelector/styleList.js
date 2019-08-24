const styleListReducer = function (styleList = [], action) {
  switch (action.type) {
    case 'CHANGE_STYLE_LIST':
      return action.styleList || [];
    default:
      return styleList;
  }
};

export default styleListReducer;
