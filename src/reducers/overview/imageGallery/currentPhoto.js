const currentPhotoReducer = function (currentPhotoIndex = 0, action) {
  switch (action.type) {
    case 'CHANGE_PHOTO':
      return action.currentPhotoIndex;
    default:
      return currentPhotoIndex;
  }
};

export default currentPhotoReducer;
