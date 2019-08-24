const changePhoto = function (photoNum) {
  return {
    type: 'CHANGE_PHOTO',
    currentPhotoIndex: photoNum,
  };
};

export default changePhoto;
