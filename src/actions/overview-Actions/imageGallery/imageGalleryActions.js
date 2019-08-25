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
  }
}

export {
  changePhoto,
  toggleExpandedView,
};
