const relatedReducer = (state = [], action) => {
  switch (action.type) {
    case 'setRelatedAction':
      return action.relatedArray;
    default:
      return state;
  }
};

export default relatedReducer;
