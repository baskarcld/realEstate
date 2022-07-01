const initialState = {
  actionErr: '',
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case 'ACTION_ERROR': {
      console.log(action.error);
      return {
        actionErr: action.error,
      };
    }
    case 'CLEAR_ERRORS': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
