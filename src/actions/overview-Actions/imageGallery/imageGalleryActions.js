const changePhoto = function (photoIndex = 0) {
  return {
    type: 'CHANGE_PHOTO',
    currentPhotoIndex: photoIndex,
  };
};

const toggleExpandedView = function (showExpanded = false) {
  return {
    type: 'TOGGLE_EXPANDED_VIEW',
    showExpandedView: showExpanded,
  };
};

const toggleZoomView = function (showZoom = false) {
  return {
    type: 'TOGGLE_ZOOM_VIEW',
    showZoomView: showZoom,
  };
};

export {
  changePhoto,
  toggleExpandedView,
  toggleZoomView,
};
