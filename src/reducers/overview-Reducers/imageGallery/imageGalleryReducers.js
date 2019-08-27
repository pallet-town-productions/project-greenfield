const currentPhotoIndex = function (currentPhotoIdx = 0, action) {
  switch (action.type) {
    case 'CHANGE_PHOTO':
      return action.currentPhotoIndex;
    default:
      return currentPhotoIdx;
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

const showZoomView = function (showZoom = false, action) {
  switch (action.type) {
    case 'TOGGLE_ZOOM_VIEW':
      return action.showZoomView;
    default:
      return showZoom;
  }
};


export {
  currentPhotoIndex,
  showExpandedView,
  showZoomView,
};
