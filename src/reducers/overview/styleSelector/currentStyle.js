const currentStyleReducer = function(state = null, action) {
  switch (action.type) {
    case 'CHANGE_STYLE':
      return action.style || null;
    default:
      return state;
  }
}

export default currentStyleReducer;
