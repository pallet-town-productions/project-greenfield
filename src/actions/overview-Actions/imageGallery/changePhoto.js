const changePhoto = function (photoIndex = 0) {
  return {
    type: 'CHANGE_PHOTO',
    currentPhotoIndex: photoIndex,
  };
};

export default changePhoto;
