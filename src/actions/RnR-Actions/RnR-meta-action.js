const getMetaData = (data) => ({ type: 'GET_METADATA', data });

const averageRating = (rating) => ({ type: 'AVG_RATING', rating });

export { getMetaData, averageRating };
