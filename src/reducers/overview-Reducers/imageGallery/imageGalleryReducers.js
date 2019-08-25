const currentPhotoIndex = function (currentPhotoIndex = 0, action) {
  switch (action.type) {
    case 'CHANGE_PHOTO':
      return action.currentPhotoIndex;
    default:
      return currentPhotoIndex;
  }
};

const showExpandedView = function (showExpanded = false, action) {
  switch (action.type) {
    case 'TOGGLE_EXPANDED_VIEW':
      return action.showExpandedView;
    default:
      return showExpanded;
  }
};


export {
  currentPhotoIndex,
  showExpandedView,
};
