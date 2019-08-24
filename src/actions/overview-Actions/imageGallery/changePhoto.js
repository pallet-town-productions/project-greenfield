const changePhoto = function (photoNum = 0) {
  return {
    type: 'CHANGE_PHOTO',
    currentPhotoIndex: photoNum,
  };
};

export default changePhoto;
