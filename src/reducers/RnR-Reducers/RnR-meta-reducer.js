const getMetaData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_METADATA':
      return action.data;
    default:
      return state;
  }
};

const averageRating = (state = 0, action) => {
  switch (action.type) {
    case 'AVG_RATING':
      return action.rating;
    default:
      return state;
  }
};

export { getMetaData, averageRating };
