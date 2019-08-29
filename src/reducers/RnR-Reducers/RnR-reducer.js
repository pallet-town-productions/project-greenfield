const updateReviews = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_REVIEWS':
      return action.info;
    case 'FILTER_REVIEWS':
      console.log(action.info);
      return action.info
    default:
      return state;
  }
};

export default updateReviews;
