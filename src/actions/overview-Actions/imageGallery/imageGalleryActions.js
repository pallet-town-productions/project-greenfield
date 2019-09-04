function changePhoto(photoIndex = 0) {
  return {
    type: 'CHANGE_PHOTO',
    currentPhotoIndex: photoIndex,
  };
}

function toggleExpandedView(showExpanded = false) {
  return {
    type: 'TOGGLE_EXPANDED_VIEW',
    showExpandedView: showExpanded,
  };
}

function toggleZoomView(showZoom = false) {
  return {
    type: 'TOGGLE_ZOOM_VIEW',
    showZoomView: showZoom,
  };
}

export {
  changePhoto,
  toggleExpandedView,
  toggleZoomView,
};
