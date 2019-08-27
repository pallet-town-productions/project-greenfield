const getMetaData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_METADATA':
      return action.data;
    default:
      return state;
  }
};

export default getMetaData;
