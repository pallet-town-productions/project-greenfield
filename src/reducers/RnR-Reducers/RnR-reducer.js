const initialState = {
  filteredReviews: [],
};

export const updateReviews = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_REVIEWS':
      return action.info;
    default:
      return state;
  }
};

export const updateStarReviews = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_REVIEWS':
      // console.log(action.info);
      return {
        filteredReviews: [
          ...state.filteredReviews,
          action.info,
        ],
      };
    default:
      return state;
  }
};
