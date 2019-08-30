export const updateReviews = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_REVIEWS':
      return action.info;
    default:
      return state;
  }
};

export const updateStarReviews = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_REVIEWS':
      return action.info;
    default:
      return state;
  }
};

export const updateReviewNumber = (state = '', action) => {
  switch (action.type) {
    case 'REVIEW_NUMBER':
      console.log(action.info);
      return action.info;
    default:
      return state;
  }
};
