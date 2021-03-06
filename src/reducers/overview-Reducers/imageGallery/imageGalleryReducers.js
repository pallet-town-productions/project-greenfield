function currentPhotoIndex(currentPhotoIdx = 0, action) {
  switch (action.type) {
    case 'CHANGE_PHOTO':
      return action.currentPhotoIndex;
    case 'NEXT_PHOTO':
      return currentPhotoIdx + 1;
    case 'PREV_PHOTO':
      return currentPhotoIdx - 1;
    default:
      return currentPhotoIdx;
  }
}

function showExpandedView(showExpanded = false, action) {
  switch (action.type) {
    case 'TOGGLE_EXPANDED_VIEW':
      return action.showExpandedView;
    default:
      return showExpanded;
  }
}

function showZoomView(showZoom = false, action) {
  switch (action.type) {
    case 'TOGGLE_ZOOM_VIEW':
      return action.showZoomView;
    default:
      return showZoom;
  }
}


export {
  currentPhotoIndex,
  showExpandedView,
  showZoomView,
};
