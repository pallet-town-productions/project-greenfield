const updateReviews = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_REVIEWS':
      return action.info;
    default:
      return state;
  }
};

export default updateReviews;
